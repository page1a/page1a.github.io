(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{288:function(t,n,a){"use strict";a.r(n);var e=a(14),i=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_2、java实现可交易钱包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、java实现可交易钱包"}},[t._v("#")]),t._v(" 2、Java实现可交易钱包")]),t._v(" "),n("h2",{attrs:{id:"本章目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本章目标"}},[t._v("#")]),t._v(" 本章目标")]),t._v(" "),n("ul",[n("li",[t._v("创建一个简单的钱包。")]),t._v(" "),n("li",[t._v("使用我们的区块链发送带签名的交易。")])]),t._v(" "),n("p",[t._v("我们已经有了一个基本的区块链，但在区块链中存放的是一些无用的信息。今天我们将用交易取代这些信息（我们的区块将能够保存多个交易），允许我们创建一个非常简单的加密货币,我们的货币名字NoobCoin。")]),t._v(" "),n("ul",[n("li",[t._v("本教程是在上一边基础上实现的")]),t._v(" "),n("li",[t._v("导入 bounceycastle和GSON")])]),t._v(" "),n("h2",{attrs:{id:"准备一个钱包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备一个钱包"}},[t._v("#")]),t._v(" 准备一个钱包")]),t._v(" "),n("p",[t._v("在加密货币中，在区块链作为交易时，货币所有权可以进行转移，每个参与者都有一个自己私有的地址来发送或者是收取货币。，钱包可以存储这些地址。因此钱包就是可以在区块链上进行新交易的软件。\n")]),n("p",[n("img",{attrs:{src:"/BlockChain/block_2/block_2-1.png",alt:""}}),n("br")]),n("p"),t._v(" "),n("p",[t._v("让我们创建一个钱包类来保存公钥和私钥:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package noobchain;\nimport java.security.*;\n\npublic class Wallet {\n\tpublic PrivateKey privateKey;\n\tpublic PublicKey publicKey;\n}\n")])])]),n("p",[t._v("公钥和私钥究竟是起到什么作用呢，其实公钥的作用就是地址，你可以分享你的公钥给别人以此来获取付款，而你的私钥的作用是为了对交易进行签名，这样其他人就不可以花费你的金额除非它拥有你的私钥，所以对于每个人而言我们必须保护好我们的私钥，不能透露我们的私钥信息给其他人。同时在我们进行交易的时候我们也会同时发送我们的公钥由此来验证我们的签名是有效的而且没有数据被篡改。")]),t._v(" "),n("p",[t._v("我们在密钥对KeyPair生成私有和公钥。我们将使用椭圆曲线加密来生成我们的密钥对KeyPair。让我们将generateKeyPair()方法添加到我们的钱包类中，并在构造函数中调用它:")]),t._v(" "),n("p",[t._v("私钥用于签署我们不想被篡改的数据。公钥用于验证签名。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package noobchain;\nimport java.security.*;\n\npublic class Wallet {\n\t\n\tpublic PrivateKey privateKey;\n\tpublic PublicKey publicKey;\n\t\n\tpublic Wallet(){\n\t\tgenerateKeyPair();\t\n\t}\n\t\t\n\tpublic void generateKeyPair() {\n\t\ttry {\n\t\t\tKeyPairGenerator keyGen = KeyPairGenerator.getInstance("ECDSA","BC");\n\t\t\tSecureRandom random = SecureRandom.getInstance("SHA1PRNG");\n\t\t\tECGenParameterSpec ecSpec = new ECGenParameterSpec("prime192v1");\n\t\t\t// Initialize the key generator and generate a KeyPair\n\t\t\tkeyGen.initialize(ecSpec, random);   //256 bytes provides an acceptable security level\n\t        \tKeyPair keyPair = keyGen.generateKeyPair();\n\t        \t// Set the public and private keys from the keyPair\n\t        \tprivateKey = keyPair.getPrivate();\n\t        \tpublicKey = keyPair.getPublic();\n\t\t}catch(Exception e) {\n\t\t\tthrow new RuntimeException(e);\n\t\t}\n\t}\n\t\n}\n')])])]),n("p",[t._v("现在我们已经又了钱包类的大概框架，下面我们再来看一下交易类。")]),t._v(" "),n("h2",{attrs:{id:"交易和数字签名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#交易和数字签名"}},[t._v("#")]),t._v(" 交易和数字签名")]),t._v(" "),n("p",[t._v("每笔交易将携带一定以下信息：")]),t._v(" "),n("ul",[n("li",[t._v("资金付款人的公匙信息。")]),t._v(" "),n("li",[t._v("资金收款人的公匙信息。")]),t._v(" "),n("li",[t._v("被转移资金的金额。")]),t._v(" "),n("li",[t._v("输入，它是对以前的交易的引用，证明发送者有资金发送。")]),t._v(" "),n("li",[t._v("输出，显示交易中收款方相关地址数量。(这些输出被引用为新交易的输入)")]),t._v(" "),n("li",[t._v("一个加密签名，证明该交易是由地址的发送者是发送的，并且数据没有被更改。(阻止第三方机构更改发送的数量)")])]),t._v(" "),n("p",[t._v("让我们创建这个新的交易类：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import java.security.*;\nimport java.util.ArrayList;\n\npublic class Transaction {\n\t\n\tpublic String transactionId; // this is also the hash of the transaction.\n\tpublic PublicKey sender; // senders address/public key.\n\tpublic PublicKey reciepient; // Recipients address/public key.\n\tpublic float value;\n\tpublic byte[] signature; // this is to prevent anybody else from spending funds in our wallet.\n\t\n\tpublic ArrayList<TransactionInput> inputs = new ArrayList<TransactionInput>();\n\tpublic ArrayList<TransactionOutput> outputs = new ArrayList<TransactionOutput>();\n\t\n\tprivate static int sequence = 0; // a rough count of how many transactions have been generated. \n\t\n\t// Constructor: \n\tpublic Transaction(PublicKey from, PublicKey to, float value,  ArrayList<TransactionInput> inputs) {\n\t\tthis.sender = from;\n\t\tthis.reciepient = to;\n\t\tthis.value = value;\n\t\tthis.inputs = inputs;\n\t}\n\t\n\t// This Calculates the transaction hash (which will be used as its Id)\n\tprivate String calulateHash() {\n\t\tsequence++; //increase the sequence to avoid 2 identical transactions having the same hash\n\t\treturn StringUtil.applySha256(\n\t\t\t\tStringUtil.getStringFromKey(sender) +\n\t\t\t\tStringUtil.getStringFromKey(reciepient) +\n\t\t\t\tFloat.toString(value) + sequence\n\t\t\t\t);\n\t}\n}\n")])])]),n("p",[t._v("我们还应该创建空的transactioninput和transactionoutput类，不要担心我们可以在后面填写它们。")]),t._v(" "),n("p",[t._v("我们的交易类还将包含生成/验证签名和验证交易的相关方法，那么签名的意图是什么？签名在我们的区块链中执行了两个非常重要的任务：第一，签名用来保证只有货币的拥有者才可以用来发送自己的货币，第二，签名用来阻止其他人试图篡改提交的交易")]),t._v(" "),n("ul",[n("li",[t._v("即私钥被用来签名数据，而公钥用来验证其完整性。")])]),t._v(" "),n("p",[t._v("举个例子：Bob 想要发送2个加密货币给Sally，他们用各自的钱包创建了交易，并提交到全网的区块链中作为一个新的区块，一个挖矿者试图篡改接受者把2个加密货币给John，但是幸运的事，Bob在交易数据中已经用私钥进行了签名，这就允许了全网中的任何节点使用小明的公匙进行验证数据是否已经被篡改（因为没有其他人的公钥可以用来验证小明发出的这笔交易）。")]),t._v(" "),n("p",[t._v("从前面的代码中我们可以看到我们的签名将是一堆字符串，所以让我们创建一个方法来生成它们。首先我们在StringUtil类中创建产生签名的方法。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public static byte[] applyECDSASig(PrivateKey privateKey, String input) {\n\t\tSignature dsa;\n\t\tbyte[] output = new byte[0];\n\t\ttry {\n\t\t\tdsa = Signature.getInstance("ECDSA", "BC");\n\t\t\tdsa.initSign(privateKey);\n\t\t\tbyte[] strByte = input.getBytes();\n\t\t\tdsa.update(strByte);\n\t\t\tbyte[] realSig = dsa.sign();\n\t\t\toutput = realSig;\n\t\t} catch (Exception e) {\n\t\t\tthrow new RuntimeException(e);\n\t\t}\n\t\treturn output;\n\t}\n\t\n\t//Verifies a String signature \n\tpublic static boolean verifyECDSASig(PublicKey publicKey, String data, byte[] signature) {\n\t\ttry {\n\t\t\tSignature ecdsaVerify = Signature.getInstance("ECDSA", "BC");\n\t\t\tecdsaVerify.initVerify(publicKey);\n\t\t\tecdsaVerify.update(data.getBytes());\n\t\t\treturn ecdsaVerify.verify(signature);\n\t\t}catch(Exception e) {\n\t\t\tthrow new RuntimeException(e);\n\t\t}\n\t}\n\n\tpublic static String getStringFromKey(Key key) {\n\t\treturn Base64.getEncoder().encodeToString(key.getEncoded());\n\t}\n')])])]),n("p",[t._v("不用担心你不能理解这些方法的内容，你所需要知道的就是applyECDSASig方法的输入参数为付款人的私钥和需要加密的数据信息，签名后返回字节数组。而verifyECDSASig方法的输入参数为公钥、加密的数据和签名，调用该方法后返回true或false来说明签名是否是有效的。getStringFromKey返回任何key的编码字符串")]),t._v(" "),n("p",[t._v("让我们使用签名的方法在交易类中，增加generatesiganature() 和 varifiysignature()方法：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//Signs all the data we dont wish to be tampered with.\npublic void generateSignature(PrivateKey privateKey) {\n\tString data = StringUtil.getStringFromKey(sender) + StringUtil.getStringFromKey(reciepient) + Float.toString(value)\t;\n\tsignature = StringUtil.applyECDSASig(privateKey,data);\t\t\n}\n//Verifies the data we signed hasnt been tampered with\npublic boolean verifiySignature() {\n\tString data = StringUtil.getStringFromKey(sender) + StringUtil.getStringFromKey(reciepient) + Float.toString(value)\t;\n\treturn StringUtil.verifyECDSASig(sender, data, signature);\n}\n")])])]),n("p",[t._v("在现实中，您可能希望签名更多信息，例如使用的输出/输入和/或时间戳（现在我们只是签名最低限度的信息）")]),t._v(" "),n("p",[t._v("签名将由矿工验证，只有签名验证成功后交易才能被添加到区块中去。")]),t._v(" "),n("h2",{attrs:{id:"测试钱包和签名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试钱包和签名"}},[t._v("#")]),t._v(" 测试钱包和签名")]),t._v(" "),n("p",[t._v("现在我们简单的进行一些测试，在主方法中，我们增加了一些新的变量也替换了我们之前在主方法中的一些内容。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import java.security.Security;\nimport java.util.ArrayList;\nimport java.util.Base64;\nimport com.google.gson.GsonBuilder;\n\npublic class NoobChain {\n\t\n\tpublic static ArrayList<Block> blockchain = new ArrayList<Block>();\n\tpublic static int difficulty = 5;\n\tpublic static Wallet walletA;\n\tpublic static Wallet walletB;\n\n\tpublic static void main(String[] args) {\t\n\t\t//Setup Bouncey castle as a Security Provider\n\t\tSecurity.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider()); \n\t\t//Create the new wallets\n\t\twalletA = new Wallet();\n\t\twalletB = new Wallet();\n\t\t//Test public and private keys\n\t\tSystem.out.println("Private and public keys:");\n\t\tSystem.out.println(StringUtil.getStringFromKey(walletA.privateKey));\n\t\tSystem.out.println(StringUtil.getStringFromKey(walletA.publicKey));\n\t\t//Create a test transaction from WalletA to walletB \n\t\tTransaction transaction = new Transaction(walletA.publicKey, walletB.publicKey, 5, null);\n\t\ttransaction.generateSignature(walletA.privateKey);\n\t\t//Verify the signature works and verify it from the public key\n\t\tSystem.out.println("Is signature verified");\n\t\tSystem.out.println(transaction.verifiySignature());\n\t\t\n\t}\n')])])]),n("p",[t._v("确定要添加bounceycastle依赖")]),t._v(" "),n("p",[t._v("我们创建了两个钱包walleta和walletb，然后打印了walleta的私钥和公钥。生成一个交易并使用walleta的私钥对其进行签名。")]),t._v(" "),n("p",[t._v("打印")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Connected to the target VM, address: '127.0.0.1:55757', transport: 'socket'\nPrivate and public keys:\nMHsCAQAwEwYHKoZIzj0CAQYIKoZIzj0DAQEEYTBfAgEBBBiJzZiesBnBWwwB+uog+fJX84mx4lPUTUagCgYIKoZIzj0DAQGhNAMyAAQfPzad0zqBUGQAany2rRZE1+2ml5IOCZST8LywjBQT8ux+3UPVbr2u0+LaExxz1WI=\nMEkwEwYHKoZIzj0CAQYIKoZIzj0DAQEDMgAEHz82ndM6gVBkAGp8tq0WRNftppeSDgmUk/C8sIwUE/Lsft1D1W69rtPi2hMcc9Vi\nIs signature verified\ntrue\n")])])]),n("p",[t._v("接下来我们将创建并验证输入和输出，并把交易保存到区块链中去。")]),t._v(" "),n("h2",{attrs:{id:"输入和输出-1-如何验证货币是你的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#输入和输出-1-如何验证货币是你的"}},[t._v("#")]),t._v(" 输入和输出 1：如何验证货币是你的")]),t._v(" "),n("p",[t._v("如果你拥有1比特币，你必须前面就得接收1比特币。比特币的账本不会在你的账户中增加一个比特币也不会从发送者那里减去一个比特币，发送者只能指向他/她之前收到过一个比特币，所以一个交易输出被创建用来显示一个比特币发送给你的地址（交易的输入指向前一个交易的输出）。")]),t._v(" "),n("p",[t._v("你的钱包余额是所有未使用的交易输出的总和")]),t._v(" "),n("p",[t._v("从这一个点出发，我们会依照比特币中的说明，把所有未使用的交易输出称为UTXO.")]),t._v(" "),n("p",[t._v("创建TransactionInput 类：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public class TransactionInput {\n\tpublic String transactionOutputId; //Reference to TransactionOutputs -> transactionId\n\tpublic TransactionOutput UTXO; //Contains the Unspent transaction output\n\t\n\tpublic TransactionInput(String transactionOutputId) {\n\t\tthis.transactionOutputId = transactionOutputId;\n\t}\n}\n")])])]),n("p",[t._v("这个类将用于引用尚未使用的transactionoutput。transactionOutputId将用于查找相关的TransactionOutput，允许矿工检查您的所有权。")]),t._v(" "),n("p",[t._v("创建TransactionOutputs 类：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("import java.security.PublicKey;\n\npublic class TransactionOutput {\n\tpublic String id;\n\tpublic PublicKey reciepient; //also known as the new owner of these coins.\n\tpublic float value; //the amount of coins they own\n\tpublic String parentTransactionId; //the id of the transaction this output was created in\n\t\n\t//Constructor\n\tpublic TransactionOutput(PublicKey reciepient, float value, String parentTransactionId) {\n\t\tthis.reciepient = reciepient;\n\t\tthis.value = value;\n\t\tthis.parentTransactionId = parentTransactionId;\n\t\tthis.id = StringUtil.applySha256(StringUtil.getStringFromKey(reciepient)+Float.toString(value)+parentTransactionId);\n\t}\n\t\n\t//Check if coin belongs to you\n\tpublic boolean isMine(PublicKey publicKey) {\n\t\treturn (publicKey == reciepient);\n\t}\n\t\n}\n")])])]),n("p",[t._v("交易输出类将显示从交易中发送给每一方的最终金额。这些作为新交易中的输入参考，作为证明你可以发送的金额数量。")]),t._v(" "),n("h2",{attrs:{id:"输入和输出-2-处理交易"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#输入和输出-2-处理交易"}},[t._v("#")]),t._v(" 输入和输出 2：处理交易")]),t._v(" "),n("p",[t._v("区块链可能会收到很多交易，而区块链可能会非常长，因为我们必须查找并检查其输入，所以可能需要非常长的时间来处理新的交易。为了解决这个问题，我们保存了一个额外的集合称之为为使用的交易作为可用的输入,所以在主函数中增加一个集合称为UTXO。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public class NoobChain {\n\t\n\tpublic static ArrayList<Block> blockchain = new ArrayList<Block>();\n\tpublic static HashMap<String,TransactionOutputs> UTXOs = new HashMap<String,TransactionOutputs>(); //list of all unspent transactions. \n\tpublic static int difficulty = 5;\n\tpublic static Wallet walletA;\n\tpublic static Wallet walletB;\n\n\tpublic static void main(String[] args) {\n")])])]),n("p",[t._v("hashmap允许我们使用键来查找值，但是您需要导入java.util.hashmap")]),t._v(" "),n("p",[t._v("重点来了，我们在交易类中增加一个processTransaction方法，这个方法是把一切放在一起用来处理交易。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//Returns true if new transaction could be created.\t\npublic boolean processTransaction() {\n\t\t\n\t\tif(verifiySignature() == false) {\n\t\t\tSystem.out.println(\"#Transaction Signature failed to verify\");\n\t\t\treturn false;\n\t\t}\n\t\t\t\t\n\t\t//gather transaction inputs (Make sure they are unspent):\n\t\tfor(TransactionInput i : inputs) {\n\t\t\ti.UTXO = NoobChain.UTXOs.get(i.transactionOutputId);\n\t\t}\n\n\t\t//check if transaction is valid:\n\t\tif(getInputsValue() < NoobChain.minimumTransaction) {\n\t\t\tSystem.out.println(\"#Transaction Inputs to small: \" + getInputsValue());\n\t\t\treturn false;\n\t\t}\n\t\t\n\t\t//generate transaction outputs:\n\t\tfloat leftOver = getInputsValue() - value; //get value of inputs then the left over change:\n\t\ttransactionId = calulateHash();\n\t\toutputs.add(new TransactionOutput( this.reciepient, value,transactionId)); //send value to recipient\n\t\toutputs.add(new TransactionOutput( this.sender, leftOver,transactionId)); //send the left over 'change' back to sender\t\t\n\t\t\t\t\n\t\t//add outputs to Unspent list\n\t\tfor(TransactionOutput o : outputs) {\n\t\t\tNoobChain.UTXOs.put(o.id , o);\n\t\t}\n\t\t\n\t\t//remove transaction inputs from UTXO lists as spent:\n\t\tfor(TransactionInput i : inputs) {\n\t\t\tif(i.UTXO == null) continue; //if Transaction can't be found skip it \n\t\t\tNoobChain.UTXOs.remove(i.UTXO.id);\n\t\t}\n\t\t\n\t\treturn true;\n\t}\n\t\n//returns sum of inputs(UTXOs) values\n\tpublic float getInputsValue() {\n\t\tfloat total = 0;\n\t\tfor(TransactionInput i : inputs) {\n\t\t\tif(i.UTXO == null) continue; //if Transaction can't be found skip it \n\t\t\ttotal += i.UTXO.value;\n\t\t}\n\t\treturn total;\n\t}\n\n//returns sum of outputs:\n\tpublic float getOutputsValue() {\n\t\tfloat total = 0;\n\t\tfor(TransactionOutput o : outputs) {\n\t\t\ttotal += o.value;\n\t\t}\n\t\treturn total;\n\t}\n")])])]),n("p",[t._v("我们还添加了getinputsvalue方法")]),t._v(" "),n("p",[t._v("通过这种方法，我们执行一些检查以确保交易有效，然后收集输入并生成输出。最重要的是，最后，我们抛弃了输入在我们的UTXO列表，这就意味着一个可以使用的交易输出必须之前一定是输入，所以输入的值必须被完全使用，所以付款人必须改变它们自身的金额状态。")]),t._v(" "),n("p",[t._v("最后让我们修改我们的wallet类")]),t._v(" "),n("ul",[n("li",[t._v("搜集余额（通过循环遍历UTXO列表来检查交易的输出是否是我的）并")]),t._v(" "),n("li",[t._v("创建交易")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import java.security.*;\nimport java.security.spec.ECGenParameterSpec;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Wallet {\n\t\n\tpublic PrivateKey privateKey;\n\tpublic PublicKey publicKey;\n\t\n\tpublic HashMap<String,TransactionOutput> UTXOs = new HashMap<String,TransactionOutput>(); //only UTXOs owned by this wallet.\n\t\n\tpublic Wallet() {...\n\t\t\n\tpublic void generateKeyPair() {...\n\t\n  //returns balance and stores the UTXO\'s owned by this wallet in this.UTXOs\n\tpublic float getBalance() {\n\t\tfloat total = 0;\t\n        for (Map.Entry<String, TransactionOutput> item: NoobChain.UTXOs.entrySet()){\n        \tTransactionOutput UTXO = item.getValue();\n            if(UTXO.isMine(publicKey)) { //if output belongs to me ( if coins belong to me )\n            \tUTXOs.put(UTXO.id,UTXO); //add it to our list of unspent transactions.\n            \ttotal += UTXO.value ; \n            }\n        }  \n\t\treturn total;\n\t}\n\t//Generates and returns a new transaction from this wallet.\n\tpublic Transaction sendFunds(PublicKey _recipient,float value ) {\n\t\tif(getBalance() < value) { //gather balance and check funds.\n\t\t\tSystem.out.println("#Not Enough funds to send transaction. Transaction Discarded.");\n\t\t\treturn null;\n\t\t}\n    //create array list of inputs\n\t\tArrayList<TransactionInput> inputs = new ArrayList<TransactionInput>();\n    \n\t\tfloat total = 0;\n\t\tfor (Map.Entry<String, TransactionOutput> item: UTXOs.entrySet()){\n\t\t\tTransactionOutput UTXO = item.getValue();\n\t\t\ttotal += UTXO.value;\n\t\t\tinputs.add(new TransactionInput(UTXO.id));\n\t\t\tif(total > value) break;\n\t\t}\n\t\t\n\t\tTransaction newTransaction = new Transaction(publicKey, _recipient , value, inputs);\n\t\tnewTransaction.generateSignature(privateKey);\n\t\t\n\t\tfor(TransactionInput input: inputs){\n\t\t\tUTXOs.remove(input.transactionOutputId);\n\t\t}\n\t\treturn newTransaction;\n\t}\n\t\n}\n')])])]),n("p",[t._v("你可以随时为钱包添加一些其他功能，例如记录您的交易历史记录。")]),t._v(" "),n("h2",{attrs:{id:"添加交易到区块中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加交易到区块中"}},[t._v("#")]),t._v(" 添加交易到区块中")]),t._v(" "),n("p",[t._v("现在我们已经有了一个有效的交易系统，我们需要把交易加入到我们的区块链中。我们把交易列表替换我们块中无用的数据，但是在一个单一的区块中可能存放了1000个交易，这就会导致大量的hash计算，不用担心在这里我们使用了交易的merkle root，稍后你会看到。让我们增加一个帮助方法来创建merkle root在StringUtils类中。")]),t._v(" "),n("p",[t._v("在StringUtils类中创建getMerkleRoot方法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('//Tacks in array of transactions and returns a merkle root.\npublic static String getMerkleRoot(ArrayList<Transaction> transactions) {\n\t\tint count = transactions.size();\n\t\tArrayList<String> previousTreeLayer = new ArrayList<String>();\n\t\tfor(Transaction transaction : transactions) {\n\t\t\tpreviousTreeLayer.add(transaction.transactionId);\n\t\t}\n\t\tArrayList<String> treeLayer = previousTreeLayer;\n\t\twhile(count > 1) {\n\t\t\ttreeLayer = new ArrayList<String>();\n\t\t\tfor(int i=1; i < previousTreeLayer.size(); i++) {\n\t\t\t\ttreeLayer.add(applySha256(previousTreeLayer.get(i-1) + previousTreeLayer.get(i)));\n\t\t\t}\n\t\t\tcount = treeLayer.size();\n\t\t\tpreviousTreeLayer = treeLayer;\n\t\t}\n\t\tString merkleRoot = (treeLayer.size() == 1) ? treeLayer.get(0) : "";\n\t\treturn merkleRoot;\n\t}\n')])])]),n("p",[t._v("我会尽快用一个实际的merkleroot取代这个方法，但是现在使用这个可以正常运行")]),t._v(" "),n("p",[t._v("修来Block 类")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('import java.util.ArrayList;\nimport java.util.Date;\n\npublic class Block {\n\t\n\tpublic String hash;\n\tpublic String previousHash; \n\tpublic String merkleRoot;\n\tpublic ArrayList<Transaction> transactions = new ArrayList<Transaction>(); //our data will be a simple message.\n\tpublic long timeStamp; //as number of milliseconds since 1/1/1970.\n\tpublic int nonce;\n\t\n\t//Block Constructor.  \n\tpublic Block(String previousHash ) {\n\t\tthis.previousHash = previousHash;\n\t\tthis.timeStamp = new Date().getTime();\n\t\t\n\t\tthis.hash = calculateHash(); //Making sure we do this after we set the other values.\n\t}\n\t\n\t//Calculate new hash based on blocks contents\n\tpublic String calculateHash() {\n\t\tString calculatedhash = StringUtil.applySha256( \n\t\t\t\tpreviousHash +\n\t\t\t\tLong.toString(timeStamp) +\n\t\t\t\tInteger.toString(nonce) + \n\t\t\t\tmerkleRoot\n\t\t\t\t);\n\t\treturn calculatedhash;\n\t}\n\t\n\t//Increases nonce value until hash target is reached.\n\tpublic void mineBlock(int difficulty) {\n\t\tmerkleRoot = StringUtil.getMerkleRoot(transactions);\n\t\tString target = StringUtil.getDificultyString(difficulty); //Create a string with difficulty * "0" \n\t\twhile(!hash.substring( 0, difficulty).equals(target)) {\n\t\t\tnonce ++;\n\t\t\thash = calculateHash();\n\t\t}\n\t\tSystem.out.println("Block Mined!!! : " + hash);\n\t}\n\t\n\t//Add transactions to this block\n\tpublic boolean addTransaction(Transaction transaction) {\n\t\t//process transaction and check if valid, unless block is genesis block then ignore.\n\t\tif(transaction == null) return false;\t\t\n\t\tif((previousHash != "0")) {\n\t\t\tif((transaction.processTransaction() != true)) {\n\t\t\t\tSystem.out.println("Transaction failed to process. Discarded.");\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t\ttransactions.add(transaction);\n\t\tSystem.out.println("Transaction Successfully added to Block");\n\t\treturn true;\n\t}\n\t\n}\n')])])]),n("p",[t._v("需要注意的是我们还更新了Block构造函数，因为我们不再需要传递字符串数据，并将merkle root包含在计算哈希方法中。addTransaction方法用来增加交易，只有满足条件下才可以成功的在区块中增加交易。")]),t._v(" "),n("p",[t._v("我们已经实现了一个可交易的区块链。")]),t._v(" "),n("h2",{attrs:{id:"最后的测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后的测试"}},[t._v("#")]),t._v(" 最后的测试")]),t._v(" "),n("p",[t._v("我们应该测试从钱包发送货币，更新区块链并进行有效性检查。但首先我们需要一种将新硬币引入混合的方法。有很多方法来创建新的硬币。在比特币区块链上，有很多方法可以创造新的比特币:矿工可以将交易包括在内，作为对每个矿工挖矿的奖励。但在这里我们只希望在创世纪区块中释放货币。就像比特币中一下，所以我们修改我们的主函数以达到下面的目的。")]),t._v(" "),n("ul",[n("li",[t._v("创世纪区块发布100个货币给walletA")]),t._v(" "),n("li",[t._v("一个更新的链有效性检查，考虑到交易。")]),t._v(" "),n("li",[t._v("测试交易看是否一切正常。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public class NoobChain {\n\t\n\tpublic static ArrayList<Block> blockchain = new ArrayList<Block>();\n\tpublic static HashMap<String,TransactionOutput> UTXOs = new HashMap<String,TransactionOutput>();\n\t\n\tpublic static int difficulty = 3;\n\tpublic static float minimumTransaction = 0.1f;\n\tpublic static Wallet walletA;\n\tpublic static Wallet walletB;\n\tpublic static Transaction genesisTransaction;\n\n\tpublic static void main(String[] args) {\t\n\t\t//add our blocks to the blockchain ArrayList:\n\t\tSecurity.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider()); //Setup Bouncey castle as a Security Provider\n\t\t\n\t\t//Create wallets:\n\t\twalletA = new Wallet();\n\t\twalletB = new Wallet();\t\t\n\t\tWallet coinbase = new Wallet();\n\t\t\n\t\t//create genesis transaction, which sends 100 NoobCoin to walletA: \n\t\tgenesisTransaction = new Transaction(coinbase.publicKey, walletA.publicKey, 100f, null);\n\t\tgenesisTransaction.generateSignature(coinbase.privateKey);\t //manually sign the genesis transaction\t\n\t\tgenesisTransaction.transactionId = "0"; //manually set the transaction id\n\t\tgenesisTransaction.outputs.add(new TransactionOutput(genesisTransaction.reciepient, genesisTransaction.value, genesisTransaction.transactionId)); //manually add the Transactions Output\n\t\tUTXOs.put(genesisTransaction.outputs.get(0).id, genesisTransaction.outputs.get(0)); //its important to store our first transaction in the UTXOs list.\n\t\t\n\t\tSystem.out.println("Creating and Mining Genesis block... ");\n\t\tBlock genesis = new Block("0");\n\t\tgenesis.addTransaction(genesisTransaction);\n\t\taddBlock(genesis);\n\t\t\n\t\t//testing\n\t\tBlock block1 = new Block(genesis.hash);\n\t\tSystem.out.println("\\nWalletA\'s balance is: " + walletA.getBalance());\n\t\tSystem.out.println("\\nWalletA is Attempting to send funds (40) to WalletB...");\n\t\tblock1.addTransaction(walletA.sendFunds(walletB.publicKey, 40f));\n\t\taddBlock(block1);\n\t\tSystem.out.println("\\nWalletA\'s balance is: " + walletA.getBalance());\n\t\tSystem.out.println("WalletB\'s balance is: " + walletB.getBalance());\n\t\t\n\t\tBlock block2 = new Block(block1.hash);\n\t\tSystem.out.println("\\nWalletA Attempting to send more funds (1000) than it has...");\n\t\tblock2.addTransaction(walletA.sendFunds(walletB.publicKey, 1000f));\n\t\taddBlock(block2);\n\t\tSystem.out.println("\\nWalletA\'s balance is: " + walletA.getBalance());\n\t\tSystem.out.println("WalletB\'s balance is: " + walletB.getBalance());\n\t\t\n\t\tBlock block3 = new Block(block2.hash);\n\t\tSystem.out.println("\\nWalletB is Attempting to send funds (20) to WalletA...");\n\t\tblock3.addTransaction(walletB.sendFunds( walletA.publicKey, 20));\n\t\tSystem.out.println("\\nWalletA\'s balance is: " + walletA.getBalance());\n\t\tSystem.out.println("WalletB\'s balance is: " + walletB.getBalance());\n\t\t\n\t\tisChainValid();\n\t\t\n\t}\n\t\n\tpublic static Boolean isChainValid() {\n\t\tBlock currentBlock; \n\t\tBlock previousBlock;\n\t\tString hashTarget = new String(new char[difficulty]).replace(\'\\0\', \'0\');\n\t\tHashMap<String,TransactionOutput> tempUTXOs = new HashMap<String,TransactionOutput>(); //a temporary working list of unspent transactions at a given block state.\n\t\ttempUTXOs.put(genesisTransaction.outputs.get(0).id, genesisTransaction.outputs.get(0));\n\t\t\n\t\t//loop through blockchain to check hashes:\n\t\tfor(int i=1; i < blockchain.size(); i++) {\n\t\t\t\n\t\t\tcurrentBlock = blockchain.get(i);\n\t\t\tpreviousBlock = blockchain.get(i-1);\n\t\t\t//compare registered hash and calculated hash:\n\t\t\tif(!currentBlock.hash.equals(currentBlock.calculateHash()) ){\n\t\t\t\tSystem.out.println("#Current Hashes not equal");\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\t//compare previous hash and registered previous hash\n\t\t\tif(!previousBlock.hash.equals(currentBlock.previousHash) ) {\n\t\t\t\tSystem.out.println("#Previous Hashes not equal");\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\t//check if hash is solved\n\t\t\tif(!currentBlock.hash.substring( 0, difficulty).equals(hashTarget)) {\n\t\t\t\tSystem.out.println("#This block hasn\'t been mined");\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\t\n\t\t\t//loop thru blockchains transactions:\n\t\t\tTransactionOutput tempOutput;\n\t\t\tfor(int t=0; t <currentBlock.transactions.size(); t++) {\n\t\t\t\tTransaction currentTransaction = currentBlock.transactions.get(t);\n\t\t\t\t\n\t\t\t\tif(!currentTransaction.verifiySignature()) {\n\t\t\t\t\tSystem.out.println("#Signature on Transaction(" + t + ") is Invalid");\n\t\t\t\t\treturn false; \n\t\t\t\t}\n\t\t\t\tif(currentTransaction.getInputsValue() != currentTransaction.getOutputsValue()) {\n\t\t\t\t\tSystem.out.println("#Inputs are note equal to outputs on Transaction(" + t + ")");\n\t\t\t\t\treturn false; \n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tfor(TransactionInput input: currentTransaction.inputs) {\t\n\t\t\t\t\ttempOutput = tempUTXOs.get(input.transactionOutputId);\n\t\t\t\t\t\n\t\t\t\t\tif(tempOutput == null) {\n\t\t\t\t\t\tSystem.out.println("#Referenced input on Transaction(" + t + ") is Missing");\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\tif(input.UTXO.value != tempOutput.value) {\n\t\t\t\t\t\tSystem.out.println("#Referenced input Transaction(" + t + ") value is Invalid");\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\ttempUTXOs.remove(input.transactionOutputId);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tfor(TransactionOutput output: currentTransaction.outputs) {\n\t\t\t\t\ttempUTXOs.put(output.id, output);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tif( currentTransaction.outputs.get(0).reciepient != currentTransaction.reciepient) {\n\t\t\t\t\tSystem.out.println("#Transaction(" + t + ") output reciepient is not who it should be");\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\tif( currentTransaction.outputs.get(1).reciepient != currentTransaction.sender) {\n\t\t\t\t\tSystem.out.println("#Transaction(" + t + ") output \'change\' is not sender.");\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t}\n\t\tSystem.out.println("Blockchain is valid");\n\t\treturn true;\n\t}\n\t\n\tpublic static void addBlock(Block newBlock) {\n\t\tnewBlock.mineBlock(difficulty);\n\t\tblockchain.add(newBlock);\n\t}\n}\n')])])]),n("p",[t._v("打印：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Connected to the target VM, address: '127.0.0.1:57085', transport: 'socket'\nCreating and Mining Genesis block... \nTransaction Successfully added to Block\nBlock Mined!!! : 000b5a7ca6bf07639122cb31e884996895a482c281dd89c203824f1e93a661bf\n\nWalletA's balance is: 100.0\n\nWalletA is Attempting to send funds (40) to WalletB...\nTransaction Successfully added to Block\nBlock Mined!!! : 000c7f814357abfea86ad1b38ec1dc3afed2afc9107f2bacc933d8136bf34df0\n\nWalletA's balance is: 60.0\nWalletB's balance is: 40.0\n\nWalletA Attempting to send more funds (1000) than it has...\n#Not Enough funds to send transaction. Transaction Discarded.\nBlock Mined!!! : 000b3822fb7985db438712816727d4bc382926a1c4654062aad4071d9b9fad98\n\nWalletA's balance is: 60.0\nWalletB's balance is: 40.0\n\nWalletB is Attempting to send funds (20) to WalletA...\nTransaction Successfully added to Block\n\nWalletA's balance is: 80.0\nWalletB's balance is: 20.0\nBlockchain is valid\n")])])]),n("p",[t._v("现在钱包能够安全地在您的区块链上发送金额，只要他们有金额发送。这意味着你有你自己的本地加密货币")]),t._v(" "),n("p",[t._v("可以进行交易的区块链")]),t._v(" "),n("p",[t._v("你已经成功地创建了自己的加密货币。你的区块链：")]),t._v(" "),n("ul",[n("li",[t._v("允许用户创建钱包")]),t._v(" "),n("li",[t._v("使用椭圆曲线加密方式为钱包提供公钥和私钥")]),t._v(" "),n("li",[t._v("通过使用数字签名算法证明所有权，确保资金转移")]),t._v(" "),n("li",[t._v("允许用户在区块链上进行交易")])])])}),[],!1,null,null,null);n.default=i.exports}}]);