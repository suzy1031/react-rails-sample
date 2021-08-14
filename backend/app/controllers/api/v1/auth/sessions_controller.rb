class Api::V1::Auth::SessionsController < ApplicationController
  def index
    # binding.pry
    if current_api_v1_user
      # binding.pry
      render json: { status: 200, current_user: current_api_v1_user }
    else
      # binding.pry
      render json: { status: 500, message: "ユーザーが存在しません" }
    end
  end
end