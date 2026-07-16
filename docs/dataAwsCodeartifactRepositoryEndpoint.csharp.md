# `dataAwsCodeartifactRepositoryEndpoint` Submodule <a name="`dataAwsCodeartifactRepositoryEndpoint` Submodule" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeartifactRepositoryEndpoint <a name="DataAwsCodeartifactRepositoryEndpoint" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCodeartifactRepositoryEndpoint(Construct Scope, string Id, DataAwsCodeartifactRepositoryEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig">DataAwsCodeartifactRepositoryEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig">DataAwsCodeartifactRepositoryEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner">ResetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDomainOwner` <a name="ResetDomainOwner" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner"></a>

```csharp
private void ResetDomainOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsCodeartifactRepositoryEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCodeartifactRepositoryEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCodeartifactRepositoryEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCodeartifactRepositoryEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCodeartifactRepositoryEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsCodeartifactRepositoryEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCodeartifactRepositoryEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCodeartifactRepositoryEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsCodeartifactRepositoryEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint">RepositoryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput">DomainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner">DomainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `RepositoryEndpoint`<sup>Required</sup> <a name="RepositoryEndpoint" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint"></a>

```csharp
public string RepositoryEndpoint { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `DomainOwnerInput`<sup>Optional</sup> <a name="DomainOwnerInput" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput"></a>

```csharp
public string DomainOwnerInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainOwner`<sup>Required</sup> <a name="DomainOwner" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner"></a>

```csharp
public string DomainOwner { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeartifactRepositoryEndpointConfig <a name="DataAwsCodeartifactRepositoryEndpointConfig" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCodeartifactRepositoryEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Domain,
    string Format,
    string Repository,
    string DomainOwner = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner">DomainOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}.

---

##### `DomainOwner`<sup>Optional</sup> <a name="DomainOwner" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner"></a>

```csharp
public string DomainOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/codeartifact_repository_endpoint#region DataAwsCodeartifactRepositoryEndpoint#region}

---



