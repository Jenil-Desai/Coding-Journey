import { Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction, TransactionInstruction } from '@solana/web3.js';
import { data_length, DoubleAccount, schema } from './types';
import { expect, test } from 'bun:test';
import { LiteSVM } from 'litesvm';
import * as borsh from 'borsh';

let svm: LiteSVM;

let adminkeypair: Keypair;
let dataAccountKeypair: Keypair;

let programKeypair: Keypair;
let middleProgramKeypair: Keypair;


test('Double Program Deployed', () => {
  svm = new LiteSVM();
  programKeypair = Keypair.generate();

  svm.addProgramFromFile(programKeypair.publicKey, '../target/deploy/double.so');

  const program = svm.getAccount(programKeypair.publicKey);
  expect(program).toBeDefined();
})

test('Middle Program Deployed', () => {
  middleProgramKeypair = Keypair.generate();

  svm.addProgramFromFile(middleProgramKeypair.publicKey, '../target/deploy/middle_contract.so');

  const program = svm.getAccount(middleProgramKeypair.publicKey);
  expect(program).toBeDefined();
})

test('Admin Inited', () => {
  adminkeypair = Keypair.generate();

  svm.airdrop(adminkeypair.publicKey, BigInt(10 * LAMPORTS_PER_SOL));

  const balance = svm.getBalance(adminkeypair.publicKey);
  expect(balance).toBe(BigInt(10 * LAMPORTS_PER_SOL));
})

test('Data Account Init', async () => {
  programKeypair = Keypair.generate();
  svm.addProgramFromFile(programKeypair.publicKey, '../target/deploy/double.so');

  dataAccountKeypair = Keypair.generate();
  const lamports = svm.minimumBalanceForRentExemption(BigInt(data_length));

  const tx = new Transaction();
  const ixn = SystemProgram.createAccount({
    fromPubkey: adminkeypair.publicKey,
    lamports: Number(lamports),
    newAccountPubkey: dataAccountKeypair.publicKey,
    programId: programKeypair.publicKey,
    space: data_length,
  })
  tx.add(ixn);
  tx.recentBlockhash = svm.latestBlockhash();
  tx.feePayer = adminkeypair.publicKey;
  tx.sign(adminkeypair, dataAccountKeypair);
  svm.sendTransaction(tx);

  const balance = svm.getBalance(dataAccountKeypair.publicKey);
  expect(balance).toBe(lamports);
});

test('Num is 1', async () => {
  const ix = new TransactionInstruction({
    keys: [
      { pubkey: dataAccountKeypair.publicKey, isSigner: true, isWritable: true },
      { pubkey: programKeypair.publicKey, isSigner: false, isWritable: false },
    ],
    programId: middleProgramKeypair.publicKey,
  })

  const tx = new Transaction();
  tx.add(ix);
  tx.recentBlockhash = svm.latestBlockhash();
  tx.feePayer = adminkeypair.publicKey;
  tx.sign(adminkeypair, dataAccountKeypair);
  const res = svm.sendTransaction(tx);
  console.log(res.toString());
  svm.expireBlockhash();

  const accountInfo = svm.getAccount(dataAccountKeypair.publicKey);
  const data = borsh.deserialize(schema, accountInfo!.data) as DoubleAccount;
  expect(data.num).toBe(1);
})

test('Num Is 2', async () => {
  const ix = new TransactionInstruction({
    keys: [
      { pubkey: dataAccountKeypair.publicKey, isSigner: true, isWritable: true },
      { pubkey: programKeypair.publicKey, isSigner: false, isWritable: false },
    ],
    programId: middleProgramKeypair.publicKey,
  })

  const tx = new Transaction();
  tx.add(ix);
  tx.recentBlockhash = svm.latestBlockhash();
  tx.feePayer = adminkeypair.publicKey;
  tx.sign(adminkeypair, dataAccountKeypair);
  svm.sendTransaction(tx);
  svm.expireBlockhash();

  const accountInfo = svm.getAccount(dataAccountKeypair.publicKey);
  const data = borsh.deserialize(schema, accountInfo!.data) as DoubleAccount;
  expect(data.num).toBe(2);
})
