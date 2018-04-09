class Bank
  attr_reader :name # Getter
  attr_reader :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(account_name, starting_deposit)
    @accounts[account_name] = starting_deposit
  end
end
