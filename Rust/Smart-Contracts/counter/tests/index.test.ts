import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, TransactionInstruction } from '@solana/web3.js';
import { CounterAccount, counterAccountSize, schema } from './types';
import { expect, test } from 'bun:test';
import * as borsh from 'borsh';

let counterAccountKeypair: Keypair;
let adminKeypair: Keypair;
const PROGRAM_ID = new PublicKey('hxc8UR8KgWSgLvfAW5bLtw4SpREFB4MVxKdLeHRQ2Xr');

test("Admin Account Initialized", async () => {
  counterAccountKeypair = Keypair.generate();
  adminKeypair = Keypair.generate();

  const connection = new Connection("http://127.0.0.1:8899", "confirmed");
  const txn = await connection.requestAirdrop(
    adminKeypair.publicKey,
    10 * LAMPORTS_PER_SOL
  );
  await connection.confirmTransaction(txn);

  const adminAccount = await connection.getAccountInfo(adminKeypair.publicKey);
  expect(adminAccount!.lamports / LAMPORTS_PER_SOL).toBe(10);
});

test("Data Account Initialized", async () => {
  const connection = new Connection("http://127.0.0.1:8899", "confirmed");
  const minimumLamports = await connection.getMinimumBalanceForRentExemption(counterAccountSize);

  const ix = SystemProgram.createAccount({
    fromPubkey: adminKeypair.publicKey,
    lamports: minimumLamports,
    newAccountPubkey: counterAccountKeypair.publicKey,
    space: counterAccountSize,
    programId: PROGRAM_ID,
  })

  const tx = new Transaction();
  tx.add(ix);

  const txHash = await connection.sendTransaction(tx, [adminKeypair, counterAccountKeypair]);
  await connection.confirmTransaction(txHash);

  const counterAccount = await connection.getAccountInfo(counterAccountKeypair.publicKey);
  expect(counterAccount!.lamports / LAMPORTS_PER_SOL).toBe(0.00091872);
});

test('Count Is Zero', async () => {
  const connection = new Connection("http://127.0.0.1:8899", "confirmed");

  const counterAccount = await connection.getAccountInfo(counterAccountKeypair.publicKey);
  expect(counterAccount).toBeDefined();

  const counter = borsh.deserialize(schema, counterAccount!.data) as CounterAccount;
  expect(counter.count).toBe(0);
})

test('Count Increases', async () => {
  const connection = new Connection("http://127.0.0.1:8899", "confirmed");

  const tx = new Transaction();
  const ix = new TransactionInstruction({
    keys: [{
      pubkey: counterAccountKeypair.publicKey,
      isSigner: true,
      isWritable: true,
    }],
    programId: PROGRAM_ID,
    data: Buffer.from(new Uint8Array([0, 1, 0, 0, 0])),
  })
  tx.add(ix);

  const txHash = await connection.sendTransaction(tx, [adminKeypair, counterAccountKeypair]);
  await connection.confirmTransaction(txHash);

  const counterAccount = await connection.getAccountInfo(counterAccountKeypair.publicKey);
  const counter = borsh.deserialize(schema, counterAccount!.data) as CounterAccount;
  expect(counter.count).toBe(1);
})

test('Count Decreases', async () => {
  const connection = new Connection("http://127.0.0.1:8899", "confirmed");

  const tx = new Transaction();
  const ix = new TransactionInstruction({
    keys: [{
      pubkey: counterAccountKeypair.publicKey,
      isSigner: true,
      isWritable: true,
    }],
    programId: PROGRAM_ID,
    data: Buffer.from(new Uint8Array([1, 1, 0, 0, 0])),
  })
  tx.add(ix);

  const txHash = await connection.sendTransaction(tx, [adminKeypair, counterAccountKeypair]);
  await connection.confirmTransaction(txHash);

  const counterAccount = await connection.getAccountInfo(counterAccountKeypair.publicKey);
  const counter = borsh.deserialize(schema, counterAccount!.data) as CounterAccount;
  expect(counter.count).toBe(0);
})
