import { Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js";
import { expect, test } from "bun:test"
import { data_length, DoubleAccount, schema } from "./types";
import { LiteSVM } from "litesvm"
import * as borsh from 'borsh';

let svm: LiteSVM;
let adminAccountKeypair: Keypair;
let dataAccountKeypair: Keypair;
let programKeypair: Keypair;

test('Admin Account Init', async () => {
  svm = new LiteSVM();
  adminAccountKeypair = Keypair.generate();

  svm.airdrop(adminAccountKeypair.publicKey, BigInt(10 * LAMPORTS_PER_SOL));
  const balance = svm.getBalance(adminAccountKeypair.publicKey);
  expect(balance).toBeGreaterThanOrEqual(BigInt(10 * LAMPORTS_PER_SOL));
});

test('Data Account Init', async () => {
  programKeypair = Keypair.generate();
  svm.addProgramFromFile(programKeypair.publicKey, '../target/deploy/double.so');

  dataAccountKeypair = Keypair.generate();
  const lamports = svm.minimumBalanceForRentExemption(BigInt(data_length));

  const tx = new Transaction();
  const ixn = SystemProgram.createAccount({
    fromPubkey: adminAccountKeypair.publicKey,
    lamports: Number(lamports),
    newAccountPubkey: dataAccountKeypair.publicKey,
    programId: programKeypair.publicKey,
    space: data_length,
  })
  tx.add(ixn);
  tx.recentBlockhash = svm.latestBlockhash();
  tx.feePayer = adminAccountKeypair.publicKey;
  tx.sign(adminAccountKeypair, dataAccountKeypair);
  svm.sendTransaction(tx);

  const balance = svm.getBalance(dataAccountKeypair.publicKey);
  expect(balance).toBe(lamports);
});

test('Num is 1', async () => {
  const ix = new TransactionInstruction({
    keys: [
      { pubkey: dataAccountKeypair.publicKey, isSigner: false, isWritable: true },
    ],
    programId: programKeypair.publicKey,
  })

  const tx = new Transaction();
  tx.add(ix);
  tx.recentBlockhash = svm.latestBlockhash();
  tx.feePayer = adminAccountKeypair.publicKey;
  tx.sign(adminAccountKeypair);
  svm.sendTransaction(tx);
  svm.expireBlockhash();

  const accountInfo = svm.getAccount(dataAccountKeypair.publicKey);
  const data = borsh.deserialize(schema, accountInfo!.data) as DoubleAccount;
  expect(data.num).toBe(1);
})

test('Num Is 2', async () => {
  const ix = new TransactionInstruction({
    keys: [
      { pubkey: dataAccountKeypair.publicKey, isSigner: false, isWritable: true },
    ],
    programId: programKeypair.publicKey,
  })

  const tx = new Transaction();
  tx.add(ix);
  tx.recentBlockhash = svm.latestBlockhash();
  tx.feePayer = adminAccountKeypair.publicKey;
  tx.sign(adminAccountKeypair);
  svm.sendTransaction(tx);
  svm.expireBlockhash();

  const accountInfo = svm.getAccount(dataAccountKeypair.publicKey);
  const data = borsh.deserialize(schema, accountInfo!.data) as DoubleAccount;
  expect(data.num).toBe(2);
})
