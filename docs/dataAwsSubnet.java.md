# `dataAwsSubnet` Submodule <a name="`dataAwsSubnet` Submodule" id="@cdktn/provider-aws.dataAwsSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSubnet <a name="DataAwsSubnet" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet aws_subnet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnet;

DataAwsSubnet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .cidrBlock(java.lang.String)
//  .defaultForAz(java.lang.Boolean|IResolvable)
//  .filter(IResolvable|java.util.List<DataAwsSubnetFilter>)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .region(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsSubnetTimeouts)
//  .vpcId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#availability_zone DataAwsSubnet#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#availability_zone_id DataAwsSubnet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#cidr_block DataAwsSubnet#cidr_block}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.defaultForAz">defaultForAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#default_for_az DataAwsSubnet#default_for_az}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#id DataAwsSubnet#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#ipv6_cidr_block DataAwsSubnet#ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#state DataAwsSubnet#state}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#tags DataAwsSubnet#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#vpc_id DataAwsSubnet#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#availability_zone DataAwsSubnet#availability_zone}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.availabilityZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#availability_zone_id DataAwsSubnet#availability_zone_id}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.cidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#cidr_block DataAwsSubnet#cidr_block}.

---

##### `defaultForAz`<sup>Optional</sup> <a name="defaultForAz" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.defaultForAz"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#default_for_az DataAwsSubnet#default_for_az}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#filter DataAwsSubnet#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#id DataAwsSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#ipv6_cidr_block DataAwsSubnet#ipv6_cidr_block}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#region DataAwsSubnet#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#state DataAwsSubnet#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#tags DataAwsSubnet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#timeouts DataAwsSubnet#timeouts}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#vpc_id DataAwsSubnet#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetDefaultForAz">resetDefaultForAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsSubnetFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.putTimeouts"></a>

```java
public void putTimeouts(DataAwsSubnetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetAvailabilityZoneId"></a>

```java
public void resetAvailabilityZoneId()
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```

##### `resetDefaultForAz` <a name="resetDefaultForAz" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetDefaultForAz"></a>

```java
public void resetDefaultForAz()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetId"></a>

```java
public void resetId()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetState"></a>

```java
public void resetState()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.resetVpcId"></a>

```java
public void resetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSubnet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnet;

DataAwsSubnet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnet;

DataAwsSubnet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnet;

DataAwsSubnet.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnet;

DataAwsSubnet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsSubnet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsSubnet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.assignIpv6AddressOnCreation">assignIpv6AddressOnCreation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availableIpAddressCount">availableIpAddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.enableDns64">enableDns64</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.enableLniAtDeviceIndex">enableLniAtDeviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch">enableResourceNameDnsAaaaRecordOnLaunch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.enableResourceNameDnsARecordOnLaunch">enableResourceNameDnsARecordOnLaunch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList">DataAwsSubnetFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ipv6CidrBlockAssociationId">ipv6CidrBlockAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ipv6Native">ipv6Native</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.mapCustomerOwnedIpOnLaunch">mapCustomerOwnedIpOnLaunch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.mapPublicIpOnLaunch">mapPublicIpOnLaunch</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.privateDnsHostnameTypeOnLaunch">privateDnsHostnameTypeOnLaunch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference">DataAwsSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.defaultForAzInput">defaultForAzInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.defaultForAz">defaultForAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `assignIpv6AddressOnCreation`<sup>Required</sup> <a name="assignIpv6AddressOnCreation" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.assignIpv6AddressOnCreation"></a>

```java
public IResolvable getAssignIpv6AddressOnCreation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `availableIpAddressCount`<sup>Required</sup> <a name="availableIpAddressCount" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availableIpAddressCount"></a>

```java
public java.lang.Number getAvailableIpAddressCount();
```

- *Type:* java.lang.Number

---

##### `customerOwnedIpv4Pool`<sup>Required</sup> <a name="customerOwnedIpv4Pool" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.customerOwnedIpv4Pool"></a>

```java
public java.lang.String getCustomerOwnedIpv4Pool();
```

- *Type:* java.lang.String

---

##### `enableDns64`<sup>Required</sup> <a name="enableDns64" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.enableDns64"></a>

```java
public IResolvable getEnableDns64();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableLniAtDeviceIndex`<sup>Required</sup> <a name="enableLniAtDeviceIndex" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.enableLniAtDeviceIndex"></a>

```java
public java.lang.Number getEnableLniAtDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `enableResourceNameDnsAaaaRecordOnLaunch`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecordOnLaunch" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.enableResourceNameDnsAaaaRecordOnLaunch"></a>

```java
public IResolvable getEnableResourceNameDnsAaaaRecordOnLaunch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableResourceNameDnsARecordOnLaunch`<sup>Required</sup> <a name="enableResourceNameDnsARecordOnLaunch" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.enableResourceNameDnsARecordOnLaunch"></a>

```java
public IResolvable getEnableResourceNameDnsARecordOnLaunch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.filter"></a>

```java
public DataAwsSubnetFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList">DataAwsSubnetFilterList</a>

---

##### `ipv6CidrBlockAssociationId`<sup>Required</sup> <a name="ipv6CidrBlockAssociationId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ipv6CidrBlockAssociationId"></a>

```java
public java.lang.String getIpv6CidrBlockAssociationId();
```

- *Type:* java.lang.String

---

##### `ipv6Native`<sup>Required</sup> <a name="ipv6Native" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ipv6Native"></a>

```java
public IResolvable getIpv6Native();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `mapCustomerOwnedIpOnLaunch`<sup>Required</sup> <a name="mapCustomerOwnedIpOnLaunch" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.mapCustomerOwnedIpOnLaunch"></a>

```java
public IResolvable getMapCustomerOwnedIpOnLaunch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `mapPublicIpOnLaunch`<sup>Required</sup> <a name="mapPublicIpOnLaunch" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.mapPublicIpOnLaunch"></a>

```java
public IResolvable getMapPublicIpOnLaunch();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `privateDnsHostnameTypeOnLaunch`<sup>Required</sup> <a name="privateDnsHostnameTypeOnLaunch" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.privateDnsHostnameTypeOnLaunch"></a>

```java
public java.lang.String getPrivateDnsHostnameTypeOnLaunch();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.timeouts"></a>

```java
public DataAwsSubnetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference">DataAwsSubnetTimeoutsOutputReference</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `defaultForAzInput`<sup>Optional</sup> <a name="defaultForAzInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.defaultForAzInput"></a>

```java
public java.lang.Boolean|IResolvable getDefaultForAzInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsSubnetFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsSubnetTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `defaultForAz`<sup>Required</sup> <a name="defaultForAz" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.defaultForAz"></a>

```java
public java.lang.Boolean|IResolvable getDefaultForAz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSubnetConfig <a name="DataAwsSubnetConfig" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnetConfig;

DataAwsSubnetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .cidrBlock(java.lang.String)
//  .defaultForAz(java.lang.Boolean|IResolvable)
//  .filter(IResolvable|java.util.List<DataAwsSubnetFilter>)
//  .id(java.lang.String)
//  .ipv6CidrBlock(java.lang.String)
//  .region(java.lang.String)
//  .state(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsSubnetTimeouts)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#availability_zone DataAwsSubnet#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#availability_zone_id DataAwsSubnet#availability_zone_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#cidr_block DataAwsSubnet#cidr_block}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.defaultForAz">defaultForAz</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#default_for_az DataAwsSubnet#default_for_az}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#id DataAwsSubnet#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#ipv6_cidr_block DataAwsSubnet#ipv6_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#state DataAwsSubnet#state}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#tags DataAwsSubnet#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#vpc_id DataAwsSubnet#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#availability_zone DataAwsSubnet#availability_zone}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#availability_zone_id DataAwsSubnet#availability_zone_id}.

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#cidr_block DataAwsSubnet#cidr_block}.

---

##### `defaultForAz`<sup>Optional</sup> <a name="defaultForAz" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.defaultForAz"></a>

```java
public java.lang.Boolean|IResolvable getDefaultForAz();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#default_for_az DataAwsSubnet#default_for_az}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsSubnetFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#filter DataAwsSubnet#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#id DataAwsSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#ipv6_cidr_block DataAwsSubnet#ipv6_cidr_block}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#region DataAwsSubnet#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#state DataAwsSubnet#state}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#tags DataAwsSubnet#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.timeouts"></a>

```java
public DataAwsSubnetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#timeouts DataAwsSubnet#timeouts}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#vpc_id DataAwsSubnet#vpc_id}.

---

### DataAwsSubnetFilter <a name="DataAwsSubnetFilter" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnetFilter;

DataAwsSubnetFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#name DataAwsSubnet#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#values DataAwsSubnet#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#name DataAwsSubnet#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#values DataAwsSubnet#values}.

---

### DataAwsSubnetTimeouts <a name="DataAwsSubnetTimeouts" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnetTimeouts;

DataAwsSubnetTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#read DataAwsSubnet#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/subnet#read DataAwsSubnet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSubnetFilterList <a name="DataAwsSubnetFilterList" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnetFilterList;

new DataAwsSubnetFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.get"></a>

```java
public DataAwsSubnetFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsSubnetFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>>

---


### DataAwsSubnetFilterOutputReference <a name="DataAwsSubnetFilterOutputReference" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnetFilterOutputReference;

new DataAwsSubnetFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsSubnetFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetFilter">DataAwsSubnetFilter</a>

---


### DataAwsSubnetTimeoutsOutputReference <a name="DataAwsSubnetTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_subnet.DataAwsSubnetTimeoutsOutputReference;

new DataAwsSubnetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsSubnetTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsSubnet.DataAwsSubnetTimeouts">DataAwsSubnetTimeouts</a>

---



