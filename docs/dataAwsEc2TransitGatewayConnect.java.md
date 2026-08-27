# `dataAwsEc2TransitGatewayConnect` Submodule <a name="`dataAwsEc2TransitGatewayConnect` Submodule" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayConnect <a name="DataAwsEc2TransitGatewayConnect" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect aws_ec2_transit_gateway_connect}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnect;

DataAwsEc2TransitGatewayConnect.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2TransitGatewayConnectTimeouts)
//  .transitGatewayConnectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.transitGatewayConnectId">transitGatewayConnectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#filter DataAwsEc2TransitGatewayConnect#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#region DataAwsEc2TransitGatewayConnect#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#timeouts DataAwsEc2TransitGatewayConnect#timeouts}

---

##### `transitGatewayConnectId`<sup>Optional</sup> <a name="transitGatewayConnectId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.Initializer.parameter.transitGatewayConnectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTransitGatewayConnectId">resetTransitGatewayConnectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2TransitGatewayConnectTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitGatewayConnectId` <a name="resetTransitGatewayConnectId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.resetTransitGatewayConnectId"></a>

```java
public void resetTransitGatewayConnectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2TransitGatewayConnect resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnect;

DataAwsEc2TransitGatewayConnect.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnect;

DataAwsEc2TransitGatewayConnect.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnect;

DataAwsEc2TransitGatewayConnect.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnect;

DataAwsEc2TransitGatewayConnect.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2TransitGatewayConnect.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsEc2TransitGatewayConnect resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2TransitGatewayConnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2TransitGatewayConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2TransitGatewayConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList">DataAwsEc2TransitGatewayConnectFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transportAttachmentId">transportAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectIdInput">transitGatewayConnectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectId">transitGatewayConnectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filter"></a>

```java
public DataAwsEc2TransitGatewayConnectFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList">DataAwsEc2TransitGatewayConnectFilterList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayConnectTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference">DataAwsEc2TransitGatewayConnectTimeoutsOutputReference</a>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `transportAttachmentId`<sup>Required</sup> <a name="transportAttachmentId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transportAttachmentId"></a>

```java
public java.lang.String getTransportAttachmentId();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayConnectTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

---

##### `transitGatewayConnectIdInput`<sup>Optional</sup> <a name="transitGatewayConnectIdInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectIdInput"></a>

```java
public java.lang.String getTransitGatewayConnectIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayConnectId`<sup>Required</sup> <a name="transitGatewayConnectId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.transitGatewayConnectId"></a>

```java
public java.lang.String getTransitGatewayConnectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnect.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayConnectConfig <a name="DataAwsEc2TransitGatewayConnectConfig" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnectConfig;

DataAwsEc2TransitGatewayConnectConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsEc2TransitGatewayConnectTimeouts)
//  .transitGatewayConnectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.transitGatewayConnectId">transitGatewayConnectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#filter DataAwsEc2TransitGatewayConnect#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#id DataAwsEc2TransitGatewayConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#region DataAwsEc2TransitGatewayConnect#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#tags DataAwsEc2TransitGatewayConnect#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.timeouts"></a>

```java
public DataAwsEc2TransitGatewayConnectTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#timeouts DataAwsEc2TransitGatewayConnect#timeouts}

---

##### `transitGatewayConnectId`<sup>Optional</sup> <a name="transitGatewayConnectId" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectConfig.property.transitGatewayConnectId"></a>

```java
public java.lang.String getTransitGatewayConnectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#transit_gateway_connect_id DataAwsEc2TransitGatewayConnect#transit_gateway_connect_id}.

---

### DataAwsEc2TransitGatewayConnectFilter <a name="DataAwsEc2TransitGatewayConnectFilter" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnectFilter;

DataAwsEc2TransitGatewayConnectFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#name DataAwsEc2TransitGatewayConnect#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#values DataAwsEc2TransitGatewayConnect#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#name DataAwsEc2TransitGatewayConnect#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#values DataAwsEc2TransitGatewayConnect#values}.

---

### DataAwsEc2TransitGatewayConnectTimeouts <a name="DataAwsEc2TransitGatewayConnectTimeouts" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnectTimeouts;

DataAwsEc2TransitGatewayConnectTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#read DataAwsEc2TransitGatewayConnect#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/ec2_transit_gateway_connect#read DataAwsEc2TransitGatewayConnect#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayConnectFilterList <a name="DataAwsEc2TransitGatewayConnectFilterList" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnectFilterList;

new DataAwsEc2TransitGatewayConnectFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get"></a>

```java
public DataAwsEc2TransitGatewayConnectFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsEc2TransitGatewayConnectFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>>

---


### DataAwsEc2TransitGatewayConnectFilterOutputReference <a name="DataAwsEc2TransitGatewayConnectFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnectFilterOutputReference;

new DataAwsEc2TransitGatewayConnectFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayConnectFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectFilter">DataAwsEc2TransitGatewayConnectFilter</a>

---


### DataAwsEc2TransitGatewayConnectTimeoutsOutputReference <a name="DataAwsEc2TransitGatewayConnectTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_transit_gateway_connect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference;

new DataAwsEc2TransitGatewayConnectTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2TransitGatewayConnectTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2TransitGatewayConnect.DataAwsEc2TransitGatewayConnectTimeouts">DataAwsEc2TransitGatewayConnectTimeouts</a>

---



