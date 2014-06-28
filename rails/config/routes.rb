Rails.application.routes.draw do
  namespace :api do
    resources :projects, only: [:index, :show]
  end
end
