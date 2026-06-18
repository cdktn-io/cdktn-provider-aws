# `dataAwsDmsReplicationInstance` Submodule <a name="`dataAwsDmsReplicationInstance` Submodule" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDmsReplicationInstance <a name="DataAwsDmsReplicationInstance" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance aws_dms_replication_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDmsReplicationInstance(Construct Scope, string Id, DataAwsDmsReplicationInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig">DataAwsDmsReplicationInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig">DataAwsDmsReplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDmsReplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDmsReplicationInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDmsReplicationInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDmsReplicationInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsDmsReplicationInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsDmsReplicationInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsDmsReplicationInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsDmsReplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDmsReplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.multiAz">MultiAz</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceArn">ReplicationInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceClass">ReplicationInstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePrivateIps">ReplicationInstancePrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePublicIps">ReplicationInstancePublicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationSubnetGroupId">ReplicationSubnetGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceIdInput">ReplicationInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceId">ReplicationInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.autoMinorVersionUpgrade"></a>

```csharp
public IResolvable AutoMinorVersionUpgrade { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.multiAz"></a>

```csharp
public IResolvable MultiAz { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.publiclyAccessible"></a>

```csharp
public IResolvable PubliclyAccessible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReplicationInstanceArn`<sup>Required</sup> <a name="ReplicationInstanceArn" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceArn"></a>

```csharp
public string ReplicationInstanceArn { get; }
```

- *Type:* string

---

##### `ReplicationInstanceClass`<sup>Required</sup> <a name="ReplicationInstanceClass" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceClass"></a>

```csharp
public string ReplicationInstanceClass { get; }
```

- *Type:* string

---

##### `ReplicationInstancePrivateIps`<sup>Required</sup> <a name="ReplicationInstancePrivateIps" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePrivateIps"></a>

```csharp
public string[] ReplicationInstancePrivateIps { get; }
```

- *Type:* string[]

---

##### `ReplicationInstancePublicIps`<sup>Required</sup> <a name="ReplicationInstancePublicIps" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstancePublicIps"></a>

```csharp
public string[] ReplicationInstancePublicIps { get; }
```

- *Type:* string[]

---

##### `ReplicationSubnetGroupId`<sup>Required</sup> <a name="ReplicationSubnetGroupId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationSubnetGroupId"></a>

```csharp
public string ReplicationSubnetGroupId { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicationInstanceIdInput`<sup>Optional</sup> <a name="ReplicationInstanceIdInput" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceIdInput"></a>

```csharp
public string ReplicationInstanceIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ReplicationInstanceId`<sup>Required</sup> <a name="ReplicationInstanceId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.replicationInstanceId"></a>

```csharp
public string ReplicationInstanceId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDmsReplicationInstanceConfig <a name="DataAwsDmsReplicationInstanceConfig" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsDmsReplicationInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ReplicationInstanceId,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.replicationInstanceId">ReplicationInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ReplicationInstanceId`<sup>Required</sup> <a name="ReplicationInstanceId" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.replicationInstanceId"></a>

```csharp
public string ReplicationInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance#region DataAwsDmsReplicationInstance#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsDmsReplicationInstance.DataAwsDmsReplicationInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}.

---



