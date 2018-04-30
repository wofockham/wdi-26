require 'rails_helper'

RSpec.describe FruitsController, type: :controller do
  describe 'GET to index' do
    before do
      3.times { |i| Fruit.create :name => "Fruit number #{ i }" }
    end

    describe 'as HTML' do
      before do
        get :index # Fake browser
      end

      it 'should respond with a status 200' do
        expect(response).to be_success
        expect(response.status).to eq 200
      end

      it 'should give us the fruits in an instance variable in reverse order' do
        # assigns(:fruits) gives us access to @fruits which is in the FruitsController
        expect(assigns(:fruits)).to be
        expect(assigns(:fruits).length).to eq 3
        expect(assigns(:fruits).first.class).to eq Fruit
        expect(assigns(:fruits).first.name).to eq 'Fruit number 2'
      end

      it 'should render the index view' do
        expect(response).to render_template('index')
      end
    end

    describe 'as JSON' do
      before do
        get :index, :format => :json
      end

      it 'should respond with a status 200' do
        expect(response).to be_success
        expect(response.status).to eq 200
      end

      it 'should use content type JSON' do
        expect(response.content_type).to eq 'application/json'
      end

      it 'should include the fruit data in JSON format' do
        fruits = JSON.parse response.body
        expect(fruits.length).to eq 3
        expect(fruits.first['name']).to eq 'Fruit number 2'
      end
    end
  end

  describe 'POST to create' do
    describe 'a fruit with valid information' do
      before do
        post :create, :params => { :fruit => { :name => 'Strawberry' } }
      end

      it 'should redirect to the show page' do
        expect(response).to redirect_to(assigns(:fruit)) # Show page
      end

      it 'should increase the number of fruits in the database' do
        expect(Fruit.count).to eq 1
      end
    end

    describe 'a fruit with invalid information' do
      before do
        post :create, :params => { :fruit => { :name => '' } }
      end

      it 'should render the new template' do
        expect(response).to render_template(:new)
      end

      it 'should not the number of fruits' do
        expect(Fruit.count).to eq 0
      end
    end
  end
end
