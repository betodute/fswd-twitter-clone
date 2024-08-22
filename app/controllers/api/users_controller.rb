module Api
  class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
      @user = User.new(user_params)

      if @user.save
        # Create a new session for the user
        session = @user.sessions.create
        cookies.permanent.signed[:twitter_session_token] = {
          value: session.token,
          httponly: true
        }

        # Optionally, render the user along with session details or just the user
        render json: @user, status: :created
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :password, :username)
    end
  end
end

