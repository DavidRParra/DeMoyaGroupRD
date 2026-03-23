module.exports = {
  apps : [{
    name: "DeMoyaGroup-prod",
    script: "npm",             
    args: "run start",          
    env: {
      NODE_ENV: "production",
      PORT: 3015,
    },
  }]
};