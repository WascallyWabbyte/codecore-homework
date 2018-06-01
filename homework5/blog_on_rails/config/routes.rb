Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'posts#index', as: 'root'

  # get '/posts/new', to: 'posts#new'
  # post '/posts/new', to: 'posts#create', as: :posts
  # get '/posts/:id', to: 'posts#show', as: :post

  resources :posts, only: [:update, :create, :show, :new, :edit, :destroy] do
    resources :comments, only: [:create, :new, :destroy]
  end

end
