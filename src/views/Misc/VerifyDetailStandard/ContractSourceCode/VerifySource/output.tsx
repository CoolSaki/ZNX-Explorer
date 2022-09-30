import React from 'react'
import { useStyles } from './styles'
// import ReCAPTCHA from 'react-google-recaptcha'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { verifyStandardJsonSolidity } from '../../../../../store/actions/misc'
import { Typography, Box } from '@material-ui/core'
import { CodePaper } from '../../../Apis/components/CodePaper'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

export const StyledLink = withStyles((theme) => ({
  root: {
    color: theme.palette.info.main,
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: 171,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.info.dark,
      cursor: 'pointer',
    },
  },
}))(Link)

interface verifySolidityProps {
  loading: boolean
  error: string
  req: object
  rep: object
}

//components
function VerifySourceOutput({ loading, error, req, rep }: verifySolidityProps) {
  const classes = useStyles()

  return (
    <div>
      {loading ? (
        <div className={classes.root}>Loading...</div>
      ) : error === '' ? (
        <div>
          <Box mb={2}>
            <Typography variant="body1">
              <strong>Compiler debug log:</strong>
            </Typography>
            {rep['txn'] !== undefined ? (
              <Typography variant="body1">
                <i className="fas fa-check-circle"></i>&nbsp;Note: Contract was created during TxHash#{' '}
                <StyledLink href={`tx/` + rep['txn']} underline="none">
                  {rep['txn']}
                </StyledLink>
              </Typography>
            ) : (
              <div></div>
            )}
            {rep['address'] !== undefined ? (
              <Typography variant="body1">
                {' '}
                <i className="fas fa-thumbs-up"></i>&nbsp;
                <span className={classes.successText}>
                  Successfully generated ByteCode and ABI for Contract Address
                </span>
                &nbsp;
                <StyledLink href={`address/` + rep['address']} underline="none">
                  {rep['address']}
                </StyledLink>
              </Typography>
            ) : (
              <div></div>
            )}
          </Box>
          <CodePaper>
            <Box>
              <Typography variant="body1">
                <strong>Compiler Version: </strong>
                {rep.compilerVersion}
              </Typography>
              <Typography variant="body1">
                <strong>Optimization Enabled: </strong>
                {JSON.stringify(rep.optimization)}
              </Typography>
              <Typography variant="body1">
                <strong>Runs: </strong>
                {rep.optimizerRuns}
              </Typography>
            </Box>
            <Box mt={2}>
              {rep['constructorArguments'] !== undefined ? (
                rep['constructorArguments'] !== '' ? (
                  <>
                    {' '}
                    <Typography variant="body1">
                      <strong>Constructor Arguments Used (ABI-encoded):</strong>
                    </Typography>
                    <CodePaper>
                      {rep['constructorArguments'] !== undefined ? (
                        <Typography variant="body1">{rep['constructorArguments']}</Typography>
                      ) : (
                        <div></div>
                      )}
                    </CodePaper>
                  </>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
              <Box mt={2}>
                <Typography variant="body1">
                  <strong>ContractName:</strong>
                </Typography>
                <CodePaper>
                  {rep['contractName'] !== undefined ? (
                    <Typography variant="body1">{rep['contractName']}</Typography>
                  ) : (
                    <div></div>
                  )}
                </CodePaper>
              </Box>
              <Box mt={2}>
                <Typography variant="body1">
                  <strong>ContractBytecode:</strong>
                </Typography>
                <CodePaper>
                  {rep['bytecode'] !== undefined ? (
                    <code style={{ overflowWrap: 'anywhere' }}>{rep['bytecode']}</code>
                  ) : (
                    <div></div>
                  )}
                </CodePaper>
              </Box>
              <Box mt={2}>
                <Typography variant="body1">
                  <strong>ContractABI:</strong>
                </Typography>
                <CodePaper>
                  {rep['abi'] !== undefined ? (
                    <Typography variant="body1">
                      <code>{JSON.stringify(rep['abi'], null, '\t')}</code>
                    </Typography>
                  ) : (
                    <div></div>
                  )}
                </CodePaper>
              </Box>
            </Box>
          </CodePaper>
        </div>
      ) : (
        <div>{JSON.stringify(error)}</div>
      )}
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.misc.verifySolidityStandardJsonContractLoading,
  error: state.misc.verifySolidityStandardJsonContractError,
  req: state.misc.verifySolidityStandardJsonContractRequest,
  rep: state.misc.verifySolidityStandardJsonContractSuccessResponse,
})

export default connect(mapStateToProps, { verifyStandardJsonSolidity })(VerifySourceOutput)