use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};

#[derive(BorshSerialize, BorshDeserialize)]
enum InstructionType {
    Increment(u32),
    Decrement(u32),
}

#[derive(BorshSerialize, BorshDeserialize)]
struct Counter {
    count: u32,
}

entrypoint!(process_instruction);

pub fn process_instruction(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let account = next_account_info(&mut accounts.iter())?;

    let ins = InstructionType::try_from_slice(instruction_data)?;
    let mut data = Counter::try_from_slice(&mut account.data.borrow())?;

    match ins {
        InstructionType::Increment(value) => {
            msg!("Executing Increment");
            data.count += value;
        }
        InstructionType::Decrement(value) => {
            msg!("Executing Decrement");
            data.count -= value;
        }
    };

    data.serialize(&mut *account.data.borrow_mut())?;

    msg!("Contract Done");

    Ok(())
}
