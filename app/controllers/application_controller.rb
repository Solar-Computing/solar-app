class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken do

    scope '/api' do
      scope '/v1' do
        scope '/simuation' do
        end
      end
    end

  end
end
