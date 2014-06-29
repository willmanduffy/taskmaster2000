class Api::TasksController < ApplicationController
  # FIXME: Haven't quite figured out how to get ember to play nice with CSRF
  protect_from_forgery except: :create

  def create
    @task = Task.create(task_params)

    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  private

  def task_params
    params.require(:task).permit(
      :name,
      :project_id
    )
  end
end
