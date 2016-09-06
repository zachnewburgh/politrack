Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :politicians
    end
  end
end
