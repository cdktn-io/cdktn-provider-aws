# `dataAwsServiceDiscoveryHttpNamespace` Submodule <a name="`dataAwsServiceDiscoveryHttpNamespace` Submodule" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServiceDiscoveryHttpNamespace <a name="DataAwsServiceDiscoveryHttpNamespace" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace aws_service_discovery_http_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsServiceDiscoveryHttpNamespace(Construct Scope, string Id, DataAwsServiceDiscoveryHttpNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig">DataAwsServiceDiscoveryHttpNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig">DataAwsServiceDiscoveryHttpNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsServiceDiscoveryHttpNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsServiceDiscoveryHttpNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsServiceDiscoveryHttpNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsServiceDiscoveryHttpNamespace.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsServiceDiscoveryHttpNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsServiceDiscoveryHttpNamespace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsServiceDiscoveryHttpNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsServiceDiscoveryHttpNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsServiceDiscoveryHttpNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.httpName">HttpName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `HttpName`<sup>Required</sup> <a name="HttpName" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.httpName"></a>

```csharp
public string HttpName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServiceDiscoveryHttpNamespaceConfig <a name="DataAwsServiceDiscoveryHttpNamespaceConfig" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsServiceDiscoveryHttpNamespaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace#name DataAwsServiceDiscoveryHttpNamespace#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace#id DataAwsServiceDiscoveryHttpNamespace#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace#tags DataAwsServiceDiscoveryHttpNamespace#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace#name DataAwsServiceDiscoveryHttpNamespace#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace#id DataAwsServiceDiscoveryHttpNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace#region DataAwsServiceDiscoveryHttpNamespace#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsServiceDiscoveryHttpNamespace.DataAwsServiceDiscoveryHttpNamespaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/service_discovery_http_namespace#tags DataAwsServiceDiscoveryHttpNamespace#tags}.

---



