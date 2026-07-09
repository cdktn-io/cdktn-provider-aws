# `dataAwsOpensearchserverlessCollectionGroup` Submodule <a name="`dataAwsOpensearchserverlessCollectionGroup` Submodule" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchserverlessCollectionGroup <a name="DataAwsOpensearchserverlessCollectionGroup" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_group aws_opensearchserverless_collection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroup(Construct Scope, string Id, DataAwsOpensearchserverlessCollectionGroupConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig">DataAwsOpensearchserverlessCollectionGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig">DataAwsOpensearchserverlessCollectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOpensearchserverlessCollectionGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOpensearchserverlessCollectionGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOpensearchserverlessCollectionGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOpensearchserverlessCollectionGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOpensearchserverlessCollectionGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOpensearchserverlessCollectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchserverlessCollectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.capacityLimits">CapacityLimits</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.generation">Generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.standbyReplicas">StandbyReplicas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityLimits`<sup>Required</sup> <a name="CapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.capacityLimits"></a>

```csharp
public DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList CapacityLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.generation"></a>

```csharp
public string Generation { get; }
```

- *Type:* string

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.standbyReplicas"></a>

```csharp
public string StandbyReplicas { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchserverlessCollectionGroupCapacityLimits <a name="DataAwsOpensearchserverlessCollectionGroupCapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupCapacityLimits {

};
```


### DataAwsOpensearchserverlessCollectionGroupConfig <a name="DataAwsOpensearchserverlessCollectionGroupConfig" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Name = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.id">Id</a></code> | <code>string</code> | ID of the collection group. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the collection group. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_group#id DataAwsOpensearchserverlessCollectionGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_group#name DataAwsOpensearchserverlessCollectionGroup#name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_group#region DataAwsOpensearchserverlessCollectionGroup#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList <a name="DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.get"></a>

```csharp
private DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">MaxIndexingCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">MaxSearchCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">MinIndexingCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu">MinSearchCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits">DataAwsOpensearchserverlessCollectionGroupCapacityLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxIndexingCapacityInOcu`<sup>Required</sup> <a name="MaxIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```csharp
public double MaxIndexingCapacityInOcu { get; }
```

- *Type:* double

---

##### `MaxSearchCapacityInOcu`<sup>Required</sup> <a name="MaxSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```csharp
public double MaxSearchCapacityInOcu { get; }
```

- *Type:* double

---

##### `MinIndexingCapacityInOcu`<sup>Required</sup> <a name="MinIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```csharp
public double MinIndexingCapacityInOcu { get; }
```

- *Type:* double

---

##### `MinSearchCapacityInOcu`<sup>Required</sup> <a name="MinSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```csharp
public double MinSearchCapacityInOcu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOpensearchserverlessCollectionGroupCapacityLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits">DataAwsOpensearchserverlessCollectionGroupCapacityLimits</a>

---



