# `dataAwsOpensearchserverlessCollectionGroups` Submodule <a name="`dataAwsOpensearchserverlessCollectionGroups` Submodule" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchserverlessCollectionGroups <a name="DataAwsOpensearchserverlessCollectionGroups" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_collection_groups aws_opensearchserverless_collection_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroups(Construct Scope, string Id, DataAwsOpensearchserverlessCollectionGroupsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig">DataAwsOpensearchserverlessCollectionGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig">DataAwsOpensearchserverlessCollectionGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOpensearchserverlessCollectionGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOpensearchserverlessCollectionGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOpensearchserverlessCollectionGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsOpensearchserverlessCollectionGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOpensearchserverlessCollectionGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOpensearchserverlessCollectionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_collection_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchserverlessCollectionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.collectionGroupSummaries">CollectionGroupSummaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CollectionGroupSummaries`<sup>Required</sup> <a name="CollectionGroupSummaries" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.collectionGroupSummaries"></a>

```csharp
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList CollectionGroupSummaries { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries {

};
```


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits {

};
```


### DataAwsOpensearchserverlessCollectionGroupsConfig <a name="DataAwsOpensearchserverlessCollectionGroupsConfig" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/opensearchserverless_collection_groups#region DataAwsOpensearchserverlessCollectionGroups#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get"></a>

```csharp
private DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">MaxIndexingCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">MaxSearchCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">MinIndexingCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minSearchCapacityInOcu">MinSearchCapacityInOcu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxIndexingCapacityInOcu`<sup>Required</sup> <a name="MaxIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```csharp
public double MaxIndexingCapacityInOcu { get; }
```

- *Type:* double

---

##### `MaxSearchCapacityInOcu`<sup>Required</sup> <a name="MaxSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```csharp
public double MaxSearchCapacityInOcu { get; }
```

- *Type:* double

---

##### `MinIndexingCapacityInOcu`<sup>Required</sup> <a name="MinIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```csharp
public double MinIndexingCapacityInOcu { get; }
```

- *Type:* double

---

##### `MinSearchCapacityInOcu`<sup>Required</sup> <a name="MinSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```csharp
public double MinSearchCapacityInOcu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.internalValue"></a>

```csharp
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits</a>

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get"></a>

```csharp
private DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.capacityLimits">CapacityLimits</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.numberOfCollections">NumberOfCollections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.standbyReplicas">StandbyReplicas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CapacityLimits`<sup>Required</sup> <a name="CapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.capacityLimits"></a>

```csharp
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList CapacityLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NumberOfCollections`<sup>Required</sup> <a name="NumberOfCollections" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.numberOfCollections"></a>

```csharp
public double NumberOfCollections { get; }
```

- *Type:* double

---

##### `StandbyReplicas`<sup>Required</sup> <a name="StandbyReplicas" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.standbyReplicas"></a>

```csharp
public string StandbyReplicas { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.internalValue"></a>

```csharp
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries</a>

---



