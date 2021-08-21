class Api::V1::UsersController < ApplicationController
  before_action :authenticate_api_v1_user!, only: [:show]
  def show
    render json: Post.where(user_id: params[:id]).to_json(include: :detail_info)
  end

end
