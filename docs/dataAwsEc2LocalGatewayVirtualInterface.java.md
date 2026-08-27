# `dataAwsEc2LocalGatewayVirtualInterface` Submodule <a name="`dataAwsEc2LocalGatewayVirtualInterface` Submodule" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayVirtualInterface <a name="DataAwsEc2LocalGatewayVirtualInterface" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface aws_ec2_local_gateway_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterface;

DataAwsEc2LocalGatewayVirtualInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2LocalGatewayVirtualInterfaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#filter DataAwsEc2LocalGatewayVirtualInterface#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#region DataAwsEc2LocalGatewayVirtualInterface#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#timeouts DataAwsEc2LocalGatewayVirtualInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2LocalGatewayVirtualInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterface;

DataAwsEc2LocalGatewayVirtualInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterface;

DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterface;

DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterface;

DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsEc2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2LocalGatewayVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2LocalGatewayVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2LocalGatewayVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList">DataAwsEc2LocalGatewayVirtualInterfaceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localAddress">localAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localBgpAsn">localBgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayId">localGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId">localGatewayVirtualInterfaceGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceIds">localGatewayVirtualInterfaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.outpostLagId">outpostLagId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerAddress">peerAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerBgpAsn">peerBgpAsn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.vlan">vlan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filter"></a>

```java
public DataAwsEc2LocalGatewayVirtualInterfaceFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList">DataAwsEc2LocalGatewayVirtualInterfaceFilterList</a>

---

##### `localAddress`<sup>Required</sup> <a name="localAddress" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localAddress"></a>

```java
public java.lang.String getLocalAddress();
```

- *Type:* java.lang.String

---

##### `localBgpAsn`<sup>Required</sup> <a name="localBgpAsn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localBgpAsn"></a>

```java
public java.lang.Number getLocalBgpAsn();
```

- *Type:* java.lang.Number

---

##### `localGatewayId`<sup>Required</sup> <a name="localGatewayId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayId"></a>

```java
public java.lang.String getLocalGatewayId();
```

- *Type:* java.lang.String

---

##### `localGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="localGatewayVirtualInterfaceGroupId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId"></a>

```java
public java.lang.String getLocalGatewayVirtualInterfaceGroupId();
```

- *Type:* java.lang.String

---

##### `localGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="localGatewayVirtualInterfaceIds" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceIds"></a>

```java
public java.util.List<java.lang.String> getLocalGatewayVirtualInterfaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outpostLagId`<sup>Required</sup> <a name="outpostLagId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.outpostLagId"></a>

```java
public java.lang.String getOutpostLagId();
```

- *Type:* java.lang.String

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerAddress"></a>

```java
public java.lang.String getPeerAddress();
```

- *Type:* java.lang.String

---

##### `peerBgpAsn`<sup>Required</sup> <a name="peerBgpAsn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerBgpAsn"></a>

```java
public java.lang.Number getPeerBgpAsn();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeouts"></a>

```java
public DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference</a>

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.vlan"></a>

```java
public java.lang.Number getVlan();
```

- *Type:* java.lang.Number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceConfig <a name="DataAwsEc2LocalGatewayVirtualInterfaceConfig" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterfaceConfig;

DataAwsEc2LocalGatewayVirtualInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2LocalGatewayVirtualInterfaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#filter DataAwsEc2LocalGatewayVirtualInterface#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#region DataAwsEc2LocalGatewayVirtualInterface#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.timeouts"></a>

```java
public DataAwsEc2LocalGatewayVirtualInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#timeouts DataAwsEc2LocalGatewayVirtualInterface#timeouts}

---

### DataAwsEc2LocalGatewayVirtualInterfaceFilter <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterfaceFilter;

DataAwsEc2LocalGatewayVirtualInterfaceFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#name DataAwsEc2LocalGatewayVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#values DataAwsEc2LocalGatewayVirtualInterface#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#name DataAwsEc2LocalGatewayVirtualInterface#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#values DataAwsEc2LocalGatewayVirtualInterface#values}.

---

### DataAwsEc2LocalGatewayVirtualInterfaceTimeouts <a name="DataAwsEc2LocalGatewayVirtualInterfaceTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts;

DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#read DataAwsEc2LocalGatewayVirtualInterface#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_local_gateway_virtual_interface#read DataAwsEc2LocalGatewayVirtualInterface#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceFilterList <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilterList" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList;

new DataAwsEc2LocalGatewayVirtualInterfaceFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get"></a>

```java
public DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsEc2LocalGatewayVirtualInterfaceFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>>

---


### DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference;

new DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>

---


### DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_local_gateway_virtual_interface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference;

new DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

---



