Rails.application.routes.draw do
  namespace :api do
    resources :projects, only: [:index, :show]
    resources :tasks, only: [:create]
  end
end
