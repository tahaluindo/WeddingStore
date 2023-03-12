import BridesForm from "../../components/Form/Brides/BridesForm";
import SlugForm from "../../components/Form/Brides/SlugForm";
import { withLoginSessionSsr } from "../../utils/withSession";
import { getDataUndanganIdByOrderId } from "../../adapters/auth";
import Layout from "../../components/Dashboard/Layout";
import * as Tabs from '@radix-ui/react-tabs';
import Inviting from "../../components/Form/Brides/Inviting";
import RSVP from "../../components/Form/Brides/RSVP";
import Comments from "../../components/Form/Brides/Comments";
import SettingTabs from "../../components/Form/Brides/SettingTabs";
import ChangePassword from "../../components/Form/Brides/Settings/ChangePassword";

// export const DataContext = createContext(null)

const BridesPage = ({ data }) => {

  // console.log(data)

  return (
    data.undanganId && data.undanganSlug ?
      <>
        <Tabs.Content className="TabsContent" value={"sideBarTabForm"}>
          <BridesForm undanganId={data.undanganId} undanganSlug={data.undanganSlug} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value={"sideBarTabRsvp"}>
          <RSVP orderId={data.orderId}/>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value={"sideBarTabComments"}>
          <Comments orderId={data.orderId}/>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value={"sideBarTabInviting"}>
          <Inviting undanganSlug={data.undanganSlug} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value={"sideBarTabSettings"}>
          <SettingTabs>
            <ChangePassword jwt={data.jwt}/>
          </SettingTabs>
        </Tabs.Content>
      </>
      :
      <>
        <SlugForm undanganId={data.undanganId} />
      </>
  );
};

BridesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = withLoginSessionSsr(
  async ({ req, res }) => {
    if (!req.session.data) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      }
    }

    let data = {};
    try {
      data["orderId"] = req.session.data.orderId;
      data["jwt"] = req.session.data.jwt;
      const dataUndangan = await getDataUndanganIdByOrderId(req.session.data.orderId)
      data["undanganId"] = dataUndangan.data.dataUndangans.data[0].id
      data["undanganSlug"] = dataUndangan.data.dataUndangans.data[0].attributes.Slug
    } catch (error) {
      data["undanganId"] = null
      data["undanganSlug"] = null
    }
    return {
      props: { data }
    }
  }
)

export default BridesPage;
