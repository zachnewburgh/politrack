module Api
  module V1
    class PoliticiansController < ApplicationController
      skip_before_filter :verify_authenticity_token 
      respond_to :json 

      def index
        respond_with(Politician.all.order("id DESC"))
      end

      def show
        respond_with(Politician.find(params[:id]))
      end

      def create
        @politician = Politician.new(politician_params)
        if @politician.save
          respond_to do |format|
            format.json {render json: @politician}
          end
        end
      end

      def update
        @politican = Politician.find(params[:id])
        if @politician.update(politician_params)
          respond_to do |format|
            format.json {render json: @politican}
          end
        end
      end

      def destroy
        respond_with Politician.destroy(params[:id])
      end

      private
      def politician_params
        params.require(:politician).permit(:name, :bio)
      end
      
    end
