// script/Storage.ts
import { ethers } from 'hardhat'

async function main() {
  const Storage = await ethers.getContractFactory('Storage')
  const storage = await Storage.deploy()
  await storage.waitForDeployment()

  console.log('Deployed to:', storage.target)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
