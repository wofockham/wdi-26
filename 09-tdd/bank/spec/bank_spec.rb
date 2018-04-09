require_relative '../bank'

describe Bank do
  let(:bank) { Bank.new 'TDD Bank' } # bank = Bank.new
  describe '.new' do
    it "creates a new bank object" do
      expect(bank).to_not be nil
    end

    it "assigns the bank a name" do
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  describe '#create_account' do
    it "creates an account for a particular person" do
      bank.create_account 'Craigsy', 200
      expect(bank.accounts['Craigsy']).to eq 200
    end
  end

  describe '#deposit' do
    it "deposits an amount into a particular customer's account" do
      bank.create_account 'Jonesy', 200
      bank.deposit 'Jonesy', 200
      expect(bank.accounts['Jonesy']).to eq 200+200
    end
  end

  describe '#withdraw' do
    it "withdraws an amount from a particular customer's account" do
      bank.create_account 'Barry', 200
      bank.withdraw 'Barry', 50
      expect(bank.accounts['Barry']).to eq 200-50
    end

    it "ignores withdrawals that exceed the balance" do
      bank.create_account 'Chanel', 1
      bank.withdraw 'Chanel', 1_000_000
      expect(bank.balance 'Chanel').to eq 1
    end
  end

  describe '#balance' do
    it "returns the balance for some particular customer" do
      bank.create_account 'Mad Robby', 500
      expect(bank.balance 'Mad Robby').to eq 500
    end
  end
end
