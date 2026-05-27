# `dataAwsSpotDatafeedSubscription` Submodule <a name="`dataAwsSpotDatafeedSubscription` Submodule" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSpotDatafeedSubscription <a name="DataAwsSpotDatafeedSubscription" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/spot_datafeed_subscription aws_spot_datafeed_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_spot_datafeed_subscription.DataAwsSpotDatafeedSubscription;

DataAwsSpotDatafeedSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/spot_datafeed_subscription#region DataAwsSpotDatafeedSubscription#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSpotDatafeedSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_spot_datafeed_subscription.DataAwsSpotDatafeedSubscription;

DataAwsSpotDatafeedSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_spot_datafeed_subscription.DataAwsSpotDatafeedSubscription;

DataAwsSpotDatafeedSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_spot_datafeed_subscription.DataAwsSpotDatafeedSubscription;

DataAwsSpotDatafeedSubscription.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_spot_datafeed_subscription.DataAwsSpotDatafeedSubscription;

DataAwsSpotDatafeedSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsSpotDatafeedSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsSpotDatafeedSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsSpotDatafeedSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsSpotDatafeedSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/spot_datafeed_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSpotDatafeedSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSpotDatafeedSubscriptionConfig <a name="DataAwsSpotDatafeedSubscriptionConfig" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_spot_datafeed_subscription.DataAwsSpotDatafeedSubscriptionConfig;

DataAwsSpotDatafeedSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSpotDatafeedSubscription.DataAwsSpotDatafeedSubscriptionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/spot_datafeed_subscription#region DataAwsSpotDatafeedSubscription#region}

---



