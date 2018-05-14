require_relative('../yegge')

describe 'reverse' do
  it 'should return the string reversed' do
    expect(reverse('SoMeStRiNg')).to eq 'gNiRtSeMoS'
  end
end
