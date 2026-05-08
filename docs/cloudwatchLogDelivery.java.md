# `cloudwatchLogDelivery` Submodule <a name="`cloudwatchLogDelivery` Submodule" id="@cdktn/provider-aws.cloudwatchLogDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogDelivery <a name="CloudwatchLogDelivery" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery aws_cloudwatch_log_delivery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDelivery;

CloudwatchLogDelivery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deliveryDestinationArn(java.lang.String)
    .deliverySourceName(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .recordFields(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .s3DeliveryConfiguration(IResolvable|java.util.List<CloudwatchLogDeliveryS3DeliveryConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.deliveryDestinationArn">deliveryDestinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.deliverySourceName">deliverySourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.recordFields">recordFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.s3DeliveryConfiguration">s3DeliveryConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deliveryDestinationArn`<sup>Required</sup> <a name="deliveryDestinationArn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.deliveryDestinationArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}.

---

##### `deliverySourceName`<sup>Required</sup> <a name="deliverySourceName" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.deliverySourceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.fieldDelimiter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}.

---

##### `recordFields`<sup>Optional</sup> <a name="recordFields" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.recordFields"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#region CloudwatchLogDelivery#region}

---

##### `s3DeliveryConfiguration`<sup>Optional</sup> <a name="s3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.s3DeliveryConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration">putS3DeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRecordFields">resetRecordFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetS3DeliveryConfiguration">resetS3DeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putS3DeliveryConfiguration` <a name="putS3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration"></a>

```java
public void putS3DeliveryConfiguration(IResolvable|java.util.List<CloudwatchLogDeliveryS3DeliveryConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.putS3DeliveryConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>>

---

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetFieldDelimiter"></a>

```java
public void resetFieldDelimiter()
```

##### `resetRecordFields` <a name="resetRecordFields" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRecordFields"></a>

```java
public void resetRecordFields()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetS3DeliveryConfiguration` <a name="resetS3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetS3DeliveryConfiguration"></a>

```java
public void resetS3DeliveryConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogDelivery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDelivery;

CloudwatchLogDelivery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDelivery;

CloudwatchLogDelivery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDelivery;

CloudwatchLogDelivery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDelivery;

CloudwatchLogDelivery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchLogDelivery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchLogDelivery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchLogDelivery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchLogDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfiguration">s3DeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList">CloudwatchLogDeliveryS3DeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArnInput">deliveryDestinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceNameInput">deliverySourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFieldsInput">recordFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfigurationInput">s3DeliveryConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArn">deliveryDestinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceName">deliverySourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFields">recordFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `s3DeliveryConfiguration`<sup>Required</sup> <a name="s3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfiguration"></a>

```java
public CloudwatchLogDeliveryS3DeliveryConfigurationList getS3DeliveryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList">CloudwatchLogDeliveryS3DeliveryConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `deliveryDestinationArnInput`<sup>Optional</sup> <a name="deliveryDestinationArnInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArnInput"></a>

```java
public java.lang.String getDeliveryDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `deliverySourceNameInput`<sup>Optional</sup> <a name="deliverySourceNameInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceNameInput"></a>

```java
public java.lang.String getDeliverySourceNameInput();
```

- *Type:* java.lang.String

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiterInput"></a>

```java
public java.lang.String getFieldDelimiterInput();
```

- *Type:* java.lang.String

---

##### `recordFieldsInput`<sup>Optional</sup> <a name="recordFieldsInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFieldsInput"></a>

```java
public java.util.List<java.lang.String> getRecordFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `s3DeliveryConfigurationInput`<sup>Optional</sup> <a name="s3DeliveryConfigurationInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.s3DeliveryConfigurationInput"></a>

```java
public IResolvable|java.util.List<CloudwatchLogDeliveryS3DeliveryConfiguration> getS3DeliveryConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deliveryDestinationArn`<sup>Required</sup> <a name="deliveryDestinationArn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliveryDestinationArn"></a>

```java
public java.lang.String getDeliveryDestinationArn();
```

- *Type:* java.lang.String

---

##### `deliverySourceName`<sup>Required</sup> <a name="deliverySourceName" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.deliverySourceName"></a>

```java
public java.lang.String getDeliverySourceName();
```

- *Type:* java.lang.String

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

---

##### `recordFields`<sup>Required</sup> <a name="recordFields" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.recordFields"></a>

```java
public java.util.List<java.lang.String> getRecordFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDelivery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogDeliveryConfig <a name="CloudwatchLogDeliveryConfig" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDeliveryConfig;

CloudwatchLogDeliveryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .deliveryDestinationArn(java.lang.String)
    .deliverySourceName(java.lang.String)
//  .fieldDelimiter(java.lang.String)
//  .recordFields(java.util.List<java.lang.String>)
//  .region(java.lang.String)
//  .s3DeliveryConfiguration(IResolvable|java.util.List<CloudwatchLogDeliveryS3DeliveryConfiguration>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliveryDestinationArn">deliveryDestinationArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliverySourceName">deliverySourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.fieldDelimiter">fieldDelimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.recordFields">recordFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.s3DeliveryConfiguration">s3DeliveryConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deliveryDestinationArn`<sup>Required</sup> <a name="deliveryDestinationArn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliveryDestinationArn"></a>

```java
public java.lang.String getDeliveryDestinationArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}.

---

##### `deliverySourceName`<sup>Required</sup> <a name="deliverySourceName" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.deliverySourceName"></a>

```java
public java.lang.String getDeliverySourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}.

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.fieldDelimiter"></a>

```java
public java.lang.String getFieldDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}.

---

##### `recordFields`<sup>Optional</sup> <a name="recordFields" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.recordFields"></a>

```java
public java.util.List<java.lang.String> getRecordFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#region CloudwatchLogDelivery#region}

---

##### `s3DeliveryConfiguration`<sup>Optional</sup> <a name="s3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.s3DeliveryConfiguration"></a>

```java
public IResolvable|java.util.List<CloudwatchLogDeliveryS3DeliveryConfiguration> getS3DeliveryConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}.

---

### CloudwatchLogDeliveryS3DeliveryConfiguration <a name="CloudwatchLogDeliveryS3DeliveryConfiguration" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDeliveryS3DeliveryConfiguration;

CloudwatchLogDeliveryS3DeliveryConfiguration.builder()
//  .enableHiveCompatiblePath(java.lang.Boolean|IResolvable)
//  .suffixPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.enableHiveCompatiblePath">enableHiveCompatiblePath</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#enable_hive_compatible_path CloudwatchLogDelivery#enable_hive_compatible_path}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.suffixPath">suffixPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#suffix_path CloudwatchLogDelivery#suffix_path}. |

---

##### `enableHiveCompatiblePath`<sup>Optional</sup> <a name="enableHiveCompatiblePath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.enableHiveCompatiblePath"></a>

```java
public java.lang.Boolean|IResolvable getEnableHiveCompatiblePath();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#enable_hive_compatible_path CloudwatchLogDelivery#enable_hive_compatible_path}.

---

##### `suffixPath`<sup>Optional</sup> <a name="suffixPath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration.property.suffixPath"></a>

```java
public java.lang.String getSuffixPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery#suffix_path CloudwatchLogDelivery#suffix_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogDeliveryS3DeliveryConfigurationList <a name="CloudwatchLogDeliveryS3DeliveryConfigurationList" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDeliveryS3DeliveryConfigurationList;

new CloudwatchLogDeliveryS3DeliveryConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get"></a>

```java
public CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchLogDeliveryS3DeliveryConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>>

---


### CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference <a name="CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_log_delivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference;

new CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetEnableHiveCompatiblePath">resetEnableHiveCompatiblePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetSuffixPath">resetSuffixPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableHiveCompatiblePath` <a name="resetEnableHiveCompatiblePath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetEnableHiveCompatiblePath"></a>

```java
public void resetEnableHiveCompatiblePath()
```

##### `resetSuffixPath` <a name="resetSuffixPath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.resetSuffixPath"></a>

```java
public void resetSuffixPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePathInput">enableHiveCompatiblePathInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPathInput">suffixPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePath">enableHiveCompatiblePath</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPath">suffixPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableHiveCompatiblePathInput`<sup>Optional</sup> <a name="enableHiveCompatiblePathInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePathInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableHiveCompatiblePathInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `suffixPathInput`<sup>Optional</sup> <a name="suffixPathInput" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPathInput"></a>

```java
public java.lang.String getSuffixPathInput();
```

- *Type:* java.lang.String

---

##### `enableHiveCompatiblePath`<sup>Required</sup> <a name="enableHiveCompatiblePath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.enableHiveCompatiblePath"></a>

```java
public java.lang.Boolean|IResolvable getEnableHiveCompatiblePath();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `suffixPath`<sup>Required</sup> <a name="suffixPath" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.suffixPath"></a>

```java
public java.lang.String getSuffixPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchLogDeliveryS3DeliveryConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchLogDelivery.CloudwatchLogDeliveryS3DeliveryConfiguration">CloudwatchLogDeliveryS3DeliveryConfiguration</a>

---



