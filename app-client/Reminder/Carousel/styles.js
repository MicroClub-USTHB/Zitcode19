import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    padding :10,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#ebebeb',
    borderWidth: 5,
    borderRadius: 8,
    shadowColor: '#fafafa',
    shadowOpacity: 1,
    marginTop: 10,
    
    shadowOffset: {
      width: 0,
      height: 5
    },
    justifyContent : "center",
    alignItems : "center",
    height : "50%",
    
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    width : "100%"
  },
  bullets: {
    
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  }
});

export default styles;