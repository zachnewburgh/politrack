module Api
  module V1
    class StatesController < ApplicationController
      skip_before_filter :verify_authenticity_token 
      respond_to :json 

      def index
        respond_with(State.all.order("id DESC"))
      end

      def show
        respond_with(State.find(params[:id]))
      end

      def create
        @state = State.new(state_params)
        if @state.save
          respond_to do |format|
            format.json {render json: @state}
          end
        end
      end

      def update
        @state = State.find(params[:id])
        if @state.update(state_params)
          respond_to do |format|
            format.json {render json: @state}
          end
        end
      end

      def destroy
        respond_with State.destroy(params[:id])
      end

      private
      def state_params
        params.require(:state).permit(:name)
      end
      
    end
  end
end