import { connect } from 'react-redux';

export default () => Child => {
  const mapStateToProps = Child.mapStateToProps || (() => ({}));
  const mapDispatchToProps = Child.mapDispatchToProps || {};

  return connect(mapStateToProps, mapDispatchToProps)(Child);
}
