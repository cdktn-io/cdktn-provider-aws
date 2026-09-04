# `dataAwsEc2TransitGatewayPeeringAttachment` Submodule <a name="`dataAwsEc2TransitGatewayPeeringAttachment` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayPeeringAttachment <a name="DataAwsEc2TransitGatewayPeeringAttachment" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment aws_ec2_transit_gateway_peering_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachment;

DataAwsEc2TransitGatewayPeeringAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2TransitGatewayPeeringAttachmentFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2TransitGatewayPeeringAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#id DataAwsEc2TransitGatewayPeeringAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#tags DataAwsEc2TransitGatewayPeeringAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#filter DataAwsEc2TransitGatewayPeeringAttachment#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#id DataAwsEc2TransitGatewayPeeringAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#region DataAwsEc2TransitGatewayPeeringAttachment#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#tags DataAwsEc2TransitGatewayPeeringAttachment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#timeouts DataAwsEc2TransitGatewayPeeringAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsEc2TransitGatewayPeeringAttachmentFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2TransitGatewayPeeringAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachment;

DataAwsEc2TransitGatewayPeeringAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachment;

DataAwsEc2TransitGatewayPeeringAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachment;

DataAwsEc2TransitGatewayPeeringAttachment.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachment;

DataAwsEc2TransitGatewayPeeringAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2TransitGatewayPeeringAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayPeeringAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2TransitGatewayPeeringAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2TransitGatewayPeeringAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayPeeringAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList">DataAwsEc2TransitGatewayPeeringAttachmentFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.peerAccountId">peerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.peerRegion">peerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference">DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.filter"></a>

```java
public DataAwsEc2TransitGatewayPeeringAttachmentFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList">DataAwsEc2TransitGatewayPeeringAttachmentFilterList</a>

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.peerAccountId"></a>

```java
public java.lang.String getPeerAccountId();
```

- *Type:* java.lang.String

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.peerRegion"></a>

```java
public java.lang.String getPeerRegion();
```

- *Type:* java.lang.String

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.peerTransitGatewayId"></a>

```java
public java.lang.String getPeerTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference">DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference</a>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayPeeringAttachmentFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayPeeringAttachmentConfig <a name="DataAwsEc2TransitGatewayPeeringAttachmentConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig;

DataAwsEc2TransitGatewayPeeringAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2TransitGatewayPeeringAttachmentFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2TransitGatewayPeeringAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#id DataAwsEc2TransitGatewayPeeringAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#tags DataAwsEc2TransitGatewayPeeringAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayPeeringAttachmentFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#filter DataAwsEc2TransitGatewayPeeringAttachment#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#id DataAwsEc2TransitGatewayPeeringAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#region DataAwsEc2TransitGatewayPeeringAttachment#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#tags DataAwsEc2TransitGatewayPeeringAttachment#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentConfig.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayPeeringAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#timeouts DataAwsEc2TransitGatewayPeeringAttachment#timeouts}

---

### DataAwsEc2TransitGatewayPeeringAttachmentFilter <a name="DataAwsEc2TransitGatewayPeeringAttachmentFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter;

DataAwsEc2TransitGatewayPeeringAttachmentFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#name DataAwsEc2TransitGatewayPeeringAttachment#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#values DataAwsEc2TransitGatewayPeeringAttachment#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#name DataAwsEc2TransitGatewayPeeringAttachment#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#values DataAwsEc2TransitGatewayPeeringAttachment#values}.

---

### DataAwsEc2TransitGatewayPeeringAttachmentTimeouts <a name="DataAwsEc2TransitGatewayPeeringAttachmentTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts;

DataAwsEc2TransitGatewayPeeringAttachmentTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#read DataAwsEc2TransitGatewayPeeringAttachment#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ec2_transit_gateway_peering_attachment#read DataAwsEc2TransitGatewayPeeringAttachment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayPeeringAttachmentFilterList <a name="DataAwsEc2TransitGatewayPeeringAttachmentFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList;

new DataAwsEc2TransitGatewayPeeringAttachmentFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.get"></a>

```java
public DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayPeeringAttachmentFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>>

---


### DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference <a name="DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference;

new DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentFilter">DataAwsEc2TransitGatewayPeeringAttachmentFilter</a>

---


### DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_peering_attachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference;

new DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayPeeringAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayPeeringAttachment.DataAwsEc2TransitGatewayPeeringAttachmentTimeouts">DataAwsEc2TransitGatewayPeeringAttachmentTimeouts</a>

---



