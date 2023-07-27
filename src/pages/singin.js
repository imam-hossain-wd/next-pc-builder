import RootLayout from "@/components/layout/RootLayout";


const SingInPage = () => {
    return (
        <div>
            this is sing in page
            
        </div>
    );
};

export default SingInPage;

SingInPage.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }
  