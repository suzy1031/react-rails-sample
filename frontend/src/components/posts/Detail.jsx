import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SpaceRow from '../layout/SpaceRow';
// style
import {
  Button,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// redux
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../redux/actions/allActions';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  fontWeight: {
    fontWeight: 900,
  },
});

const Detail = () => {
  const dispatch = useDispatch();
  const postDetail = useSelector((state) => state.asyncDetailData).payload;
  const classes = useStyles();

  const query = useParams();

  const history = useHistory();

  useEffect(() => {
    const id = query.id;
    dispatch(allActions.getAsyncDetailData(id));
  }, []);

  return (
    <>
      <h1>DETAIL</h1>
      <Button
        variant='contained'
        color='primary'
        onClick={() => history.push('/')}
      >
        戻る
      </Button>
      <SpaceRow height={20} />
      <TableContainer component={Paper} className={classes.table}>
        <Table className={classes.table} aria-label='simple table'>
          <TableBody>
            <TableRow>
              <TableCell align='right' className={classes.fontWeight}>
                ID：
              </TableCell>
              <TableCell align='center'>{postDetail?.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right' className={classes.fontWeight}>
                名前：
              </TableCell>
              <TableCell align='center'>{postDetail?.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right' className={classes.fontWeight}>
                猫種：
              </TableCell>
              <TableCell align='center'>{postDetail?.nekoType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right' className={classes.fontWeight}>
                好きな食べ物：
              </TableCell>
              <TableCell align='center'>
                {postDetail?.detailInfo.favoriteFood}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right' className={classes.fontWeight}>
                好きなおもちゃ：
              </TableCell>
              <TableCell align='center'>
                {postDetail?.detailInfo.favoriteToy}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Detail;
