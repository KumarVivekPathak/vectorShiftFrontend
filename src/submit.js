// submit.js

export const SubmitButton = () => {

    const onsubmit = () =>{
        window.alert("submitt pessed ")
    }

    return (
        <div className="flex items-center justify-center mt-4">
      <button
        type="submit"
        onClick={onsubmit}
        className="px-6 py-3 font-times bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xl font-medium rounded-lg 
          shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 
          focus:ring-2 focus:ring-violet-300 focus:outline-none active:shadow-md active:translate-y-0
          disabled:opacity-70 disabled:cursor-not-allowed hover:from-violet-600 hover:to-purple-800"
      >
        Submit
      </button>
    </div>
    );
}
