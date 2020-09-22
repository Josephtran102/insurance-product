import Claims from './claims'
import { drizzleConnect } from '@drizzle/react-plugin'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    AssetTracker: state.contracts.AssetTracker,
    drizzleStatus: state.drizzleStatus
  }
};

const ClaimsContainer = drizzleConnect(Claims, mapStateToProps);

export default ClaimsContainer
