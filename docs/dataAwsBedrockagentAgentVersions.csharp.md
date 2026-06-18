# `dataAwsBedrockagentAgentVersions` Submodule <a name="`dataAwsBedrockagentAgentVersions` Submodule" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockagentAgentVersions <a name="DataAwsBedrockagentAgentVersions" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/bedrockagent_agent_versions aws_bedrockagent_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockagentAgentVersions(Construct Scope, string Id, DataAwsBedrockagentAgentVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig">DataAwsBedrockagentAgentVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig">DataAwsBedrockagentAgentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries">PutAgentVersionSummaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetAgentVersionSummaries">ResetAgentVersionSummaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAgentVersionSummaries` <a name="PutAgentVersionSummaries" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries"></a>

```csharp
private void PutAgentVersionSummaries(IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]

---

##### `ResetAgentVersionSummaries` <a name="ResetAgentVersionSummaries" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetAgentVersionSummaries"></a>

```csharp
private void ResetAgentVersionSummaries()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockagentAgentVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockagentAgentVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockagentAgentVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsBedrockagentAgentVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBedrockagentAgentVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBedrockagentAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/bedrockagent_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockagentAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummaries">AgentVersionSummaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummariesInput">AgentVersionSummariesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AgentVersionSummaries`<sup>Required</sup> <a name="AgentVersionSummaries" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummaries"></a>

```csharp
public DataAwsBedrockagentAgentVersionsAgentVersionSummariesList AgentVersionSummaries { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesList</a>

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `AgentVersionSummariesInput`<sup>Optional</sup> <a name="AgentVersionSummariesInput" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummariesInput"></a>

```csharp
public IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] AgentVersionSummariesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockagentAgentVersionsAgentVersionSummaries <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummaries" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockagentAgentVersionsAgentVersionSummaries {
    IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] GuardrailConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]</code> | guardrail_configuration block. |

---

##### `GuardrailConfiguration`<sup>Optional</sup> <a name="GuardrailConfiguration" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.property.guardrailConfiguration"></a>

```csharp
public IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] GuardrailConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]

guardrail_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/bedrockagent_agent_versions#guardrail_configuration DataAwsBedrockagentAgentVersions#guardrail_configuration}

---

### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration {

};
```


### DataAwsBedrockagentAgentVersionsConfig <a name="DataAwsBedrockagentAgentVersionsConfig" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockagentAgentVersionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentId,
    IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] AgentVersionSummaries = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentId">AgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentVersionSummaries">AgentVersionSummaries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]</code> | agent_version_summaries block. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}.

---

##### `AgentVersionSummaries`<sup>Optional</sup> <a name="AgentVersionSummaries" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentVersionSummaries"></a>

```csharp
public IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] AgentVersionSummaries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]

agent_version_summaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/bedrockagent_agent_versions#agent_version_summaries DataAwsBedrockagentAgentVersions#agent_version_summaries}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/bedrockagent_agent_versions#region DataAwsBedrockagentAgentVersions#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get"></a>

```csharp
private DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailVersion">GuardrailVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuardrailIdentifier`<sup>Required</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```csharp
public string GuardrailIdentifier { get; }
```

- *Type:* string

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```csharp
public string GuardrailVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesList <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesList" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockagentAgentVersionsAgentVersionSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get"></a>

```csharp
private DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>[]

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration">PutGuardrailConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resetGuardrailConfiguration">ResetGuardrailConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuardrailConfiguration` <a name="PutGuardrailConfiguration" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration"></a>

```csharp
private void PutGuardrailConfiguration(IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]

---

##### `ResetGuardrailConfiguration` <a name="ResetGuardrailConfiguration" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resetGuardrailConfiguration"></a>

```csharp
private void ResetGuardrailConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentName">AgentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentStatus">AgentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfiguration">GuardrailConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfigurationInput">GuardrailConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentName"></a>

```csharp
public string AgentName { get; }
```

- *Type:* string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentStatus"></a>

```csharp
public string AgentStatus { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GuardrailConfiguration`<sup>Required</sup> <a name="GuardrailConfiguration" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfiguration"></a>

```csharp
public DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList GuardrailConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `GuardrailConfigurationInput`<sup>Optional</sup> <a name="GuardrailConfigurationInput" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfigurationInput"></a>

```csharp
public IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] GuardrailConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsBedrockagentAgentVersionsAgentVersionSummaries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>

---



