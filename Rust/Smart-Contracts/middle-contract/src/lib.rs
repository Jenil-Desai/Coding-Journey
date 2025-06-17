use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint,
    entrypoint::ProgramResult,
    instruction::{AccountMeta, Instruction},
    program::invoke,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    _publickey: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    let data_account = next_account_info(&mut accounts.iter())?;
    let double_program = next_account_info(&mut accounts.iter())?;

    let ix = Instruction {
        program_id: *double_program.key,
        accounts: vec![AccountMeta {
            is_signer: true,
            is_writable: true,
            pubkey: *data_account.key,
        }],
        data: vec![],
    };

    invoke(&ix, &[data_account.clone()])?;

    Ok(())
}
