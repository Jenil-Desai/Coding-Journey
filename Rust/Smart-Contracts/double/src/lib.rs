use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

#[derive(BorshSerialize, BorshDeserialize, Debug)]
struct OnChainData {
    num: u32,
}

pub fn process_instruction(
    _program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let account = next_account_info(&mut accounts.iter())?;

    let mut data = OnChainData::try_from_slice(&account.data.borrow())?;

    if data.num == 0 {
        data.num = 1;
    } else {
        data.num = data.num * 2;
    }

    data.serialize(&mut *account.data.borrow_mut())?;

    Ok(())
}
