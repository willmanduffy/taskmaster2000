class Project < ActiveRecord::Base
  # Validations
  validates :name, presence: true

  # Associations
  has_many :tasks, dependent: :destroy
end
