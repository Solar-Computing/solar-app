Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # devise_for :users

  get "/api/simulation/" => "simulations#get_simulation"
end
