# `networkAclRule` Submodule <a name="`networkAclRule` Submodule" id="@cdktn/provider-aws.networkAclRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkAclRule <a name="NetworkAclRule" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule aws_network_acl_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer"></a>

```java
import io.cdktn.providers.aws.network_acl_rule.NetworkAclRule;

NetworkAclRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .networkAclId(java.lang.String)
    .protocol(java.lang.String)
    .ruleAction(java.lang.String)
    .ruleNumber(java.lang.Number)
//  .cidrBlock(java.lang.String)
//  .egress(java.lang.Boolean|IResolvable)
//  .fromPort(java.lang.Number)
//  .icmpCode(java.lang.Number)
//  .icmpType(java.lang.Number)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .region(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.networkAclId">networkAclId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ruleNumber">ruleNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.egress">egress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#egress NetworkAclRule#egress}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.icmpType">icmpType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#id NetworkAclRule#id}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `networkAclId`<sup>Required</sup> <a name="networkAclId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.networkAclId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}.

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ruleAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}.

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ruleNumber"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.cidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.egress"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#egress NetworkAclRule#egress}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.fromPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.icmpCode"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.icmpType"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#id NetworkAclRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#region NetworkAclRule#region}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.Initializer.parameter.toPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetFromPort">resetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetToPort">resetToPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```

##### `resetEgress` <a name="resetEgress" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetEgress"></a>

```java
public void resetEgress()
```

##### `resetFromPort` <a name="resetFromPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetFromPort"></a>

```java
public void resetFromPort()
```

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIcmpCode"></a>

```java
public void resetIcmpCode()
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIcmpType"></a>

```java
public void resetIcmpType()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetId"></a>

```java
public void resetId()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetToPort` <a name="resetToPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.resetToPort"></a>

```java
public void resetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkAclRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isConstruct"></a>

```java
import io.cdktn.providers.aws.network_acl_rule.NetworkAclRule;

NetworkAclRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.network_acl_rule.NetworkAclRule;

NetworkAclRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.network_acl_rule.NetworkAclRule;

NetworkAclRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.network_acl_rule.NetworkAclRule;

NetworkAclRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkAclRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworkAclRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkAclRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkAclRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworkAclRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.egressInput">egressInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fromPortInput">fromPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpCodeInput">icmpCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpTypeInput">icmpTypeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.networkAclIdInput">networkAclIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleActionInput">ruleActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumberInput">ruleNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.toPortInput">toPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.egress">egress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpType">icmpType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.networkAclId">networkAclId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumber">ruleNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.egressInput"></a>

```java
public java.lang.Boolean|IResolvable getEgressInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fromPortInput"></a>

```java
public java.lang.Number getFromPortInput();
```

- *Type:* java.lang.Number

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpCodeInput"></a>

```java
public java.lang.Number getIcmpCodeInput();
```

- *Type:* java.lang.Number

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpTypeInput"></a>

```java
public java.lang.Number getIcmpTypeInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `networkAclIdInput`<sup>Optional</sup> <a name="networkAclIdInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.networkAclIdInput"></a>

```java
public java.lang.String getNetworkAclIdInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleActionInput`<sup>Optional</sup> <a name="ruleActionInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleActionInput"></a>

```java
public java.lang.String getRuleActionInput();
```

- *Type:* java.lang.String

---

##### `ruleNumberInput`<sup>Optional</sup> <a name="ruleNumberInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumberInput"></a>

```java
public java.lang.Number getRuleNumberInput();
```

- *Type:* java.lang.Number

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.toPortInput"></a>

```java
public java.lang.Number getToPortInput();
```

- *Type:* java.lang.Number

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.egress"></a>

```java
public java.lang.Boolean|IResolvable getEgress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpCode"></a>

```java
public java.lang.Number getIcmpCode();
```

- *Type:* java.lang.Number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.icmpType"></a>

```java
public java.lang.Number getIcmpType();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `networkAclId`<sup>Required</sup> <a name="networkAclId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.networkAclId"></a>

```java
public java.lang.String getNetworkAclId();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleAction"></a>

```java
public java.lang.String getRuleAction();
```

- *Type:* java.lang.String

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.ruleNumber"></a>

```java
public java.lang.Number getRuleNumber();
```

- *Type:* java.lang.Number

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkAclRuleConfig <a name="NetworkAclRuleConfig" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.network_acl_rule.NetworkAclRuleConfig;

NetworkAclRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .networkAclId(java.lang.String)
    .protocol(java.lang.String)
    .ruleAction(java.lang.String)
    .ruleNumber(java.lang.Number)
//  .cidrBlock(java.lang.String)
//  .egress(java.lang.Boolean|IResolvable)
//  .fromPort(java.lang.Number)
//  .icmpCode(java.lang.Number)
//  .icmpType(java.lang.Number)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .region(java.lang.String)
//  .toPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.networkAclId">networkAclId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleNumber">ruleNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.egress">egress</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#egress NetworkAclRule#egress}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.fromPort">fromPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpType">icmpType</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#id NetworkAclRule#id}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.toPort">toPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `networkAclId`<sup>Required</sup> <a name="networkAclId" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.networkAclId"></a>

```java
public java.lang.String getNetworkAclId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}.

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleAction"></a>

```java
public java.lang.String getRuleAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}.

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ruleNumber"></a>

```java
public java.lang.Number getRuleNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.egress"></a>

```java
public java.lang.Boolean|IResolvable getEgress();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#egress NetworkAclRule#egress}.

---

##### `fromPort`<sup>Optional</sup> <a name="fromPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.fromPort"></a>

```java
public java.lang.Number getFromPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpCode"></a>

```java
public java.lang.Number getIcmpCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.icmpType"></a>

```java
public java.lang.Number getIcmpType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#id NetworkAclRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#region NetworkAclRule#region}

---

##### `toPort`<sup>Optional</sup> <a name="toPort" id="@cdktn/provider-aws.networkAclRule.NetworkAclRuleConfig.property.toPort"></a>

```java
public java.lang.Number getToPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}.

---



