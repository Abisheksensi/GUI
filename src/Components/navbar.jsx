import React from "react";

function Navbar() {
  return (
<div style={{width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{width: 116, height: 62.25, position: 'relative'}}>
        <div style={{width: 36.76, height: 31.33, left: 0, top: 23.16, position: 'absolute'}}>
            <div style={{width: 35.72, height: 17.64, left: 1.04, top: -0, position: 'absolute', background: 'linear-gradient(252deg, #E412F0 0%, #7F29A4 100%)'}}></div>
            <div style={{width: 31.58, height: 12.47, left: 0, top: 18.87, position: 'absolute', background: '#501F8A'}}></div>
            <div style={{width: 1.22, height: 1.22, left: 10.36, top: 26.96, position: 'absolute', background: 'linear-gradient(252deg, #E412F0 0%, #7F29A4 100%)'}}></div>
            <div style={{width: 1.22, height: 1.22, left: 11.87, top: 26.96, position: 'absolute', background: 'linear-gradient(252deg, #E412F0 0%, #7F29A4 100%)'}}></div>
            <div style={{width: 1.22, height: 1.22, left: 10.36, top: 28.53, position: 'absolute', background: 'linear-gradient(252deg, #E412F0 0%, #7F29A4 100%)'}}></div>
            <div style={{width: 1.22, height: 1.22, left: 11.87, top: 28.53, position: 'absolute', background: 'linear-gradient(252deg, #E412F0 0%, #7F29A4 100%)'}}></div>
        </div>
        <div style={{left: 0, top: 0, position: 'absolute', color: '#070035', fontSize: 21.80, fontFamily: 'Satoshi Variable', fontWeight: '700', letterSpacing: 2.29, wordWrap: 'break-word'}}>HOUSING</div>
        <div style={{left: 34.06, top: 27.25, position: 'absolute', color: '#070035', fontSize: 25.89, fontFamily: 'Satoshi Variable', fontWeight: '300', letterSpacing: 6.34, wordWrap: 'break-word'}}>PERT</div>
    </div>
    <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 17, display: 'flex'}}>
        <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#7B7B7B', fontSize: 16, fontFamily: 'Satoshi', fontWeight: '400', wordWrap: 'break-word'}}>Home</div>
        </div>
        <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#7B7B7B', fontSize: 16, fontFamily: 'Satoshi', fontWeight: '400', wordWrap: 'break-word'}}>Projects</div>
        </div>
        <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#7B7B7B', fontSize: 16, fontFamily: 'Satoshi', fontWeight: '400', wordWrap: 'break-word'}}>Properties</div>
        </div>
        <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div style={{color: '#7B7B7B', fontSize: 16, fontFamily: 'Satoshi', fontWeight: '400', wordWrap: 'break-word'}}>Conatct us</div>
        </div>
    </div>
    <div style={{height: 42, padding: 10, background: '#0B1D27', borderRadius: 50, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
        <div style={{color: 'white', fontSize: 16, fontFamily: 'Satoshi', fontWeight: '500', wordWrap: 'break-word'}}>Sample</div>
    </div>
</div>

  );
};

export default Navbar;