Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :create, :show] do
      resources :posts, only: [:index]
    end 
    resource :session, only: [:create, :destroy]
    resources :posts, except: [:new, :edit]
  end 
end
