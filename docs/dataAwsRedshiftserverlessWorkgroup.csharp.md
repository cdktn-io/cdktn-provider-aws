# `dataAwsRedshiftserverlessWorkgroup` Submodule <a name="`dataAwsRedshiftserverlessWorkgroup` Submodule" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftserverlessWorkgroup <a name="DataAwsRedshiftserverlessWorkgroup" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/redshiftserverless_workgroup aws_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroup(Construct Scope, string Id, DataAwsRedshiftserverlessWorkgroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig">DataAwsRedshiftserverlessWorkgroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig">DataAwsRedshiftserverlessWorkgroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRedshiftserverlessWorkgroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRedshiftserverlessWorkgroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRedshiftserverlessWorkgroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRedshiftserverlessWorkgroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsRedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRedshiftserverlessWorkgroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRedshiftserverlessWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRedshiftserverlessWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.trackName">TrackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupId">WorkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupNameInput">WorkgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.endpoint"></a>

```csharp
public DataAwsRedshiftserverlessWorkgroupEndpointList Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointList</a>

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```csharp
public IResolvable EnhancedVpcRouting { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```csharp
public IResolvable PubliclyAccessible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `TrackName`<sup>Required</sup> <a name="TrackName" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.trackName"></a>

```csharp
public string TrackName { get; }
```

- *Type:* string

---

##### `WorkgroupId`<sup>Required</sup> <a name="WorkgroupId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupId"></a>

```csharp
public string WorkgroupId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `WorkgroupNameInput`<sup>Optional</sup> <a name="WorkgroupNameInput" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupNameInput"></a>

```csharp
public string WorkgroupNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftserverlessWorkgroupConfig <a name="DataAwsRedshiftserverlessWorkgroupConfig" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string WorkgroupName,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/redshiftserverless_workgroup#region DataAwsRedshiftserverlessWorkgroup#region}

---

### DataAwsRedshiftserverlessWorkgroupEndpoint <a name="DataAwsRedshiftserverlessWorkgroupEndpoint" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpoint {

};
```


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint {

};
```


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftserverlessWorkgroupEndpointList <a name="DataAwsRedshiftserverlessWorkgroupEndpointList" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get"></a>

```csharp
private DataAwsRedshiftserverlessWorkgroupEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsRedshiftserverlessWorkgroupEndpointOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointOutputReference" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint">VpcEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint">DataAwsRedshiftserverlessWorkgroupEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VpcEndpoint`<sup>Required</sup> <a name="VpcEndpoint" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint"></a>

```csharp
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList VpcEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsRedshiftserverlessWorkgroupEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint">DataAwsRedshiftserverlessWorkgroupEndpoint</a>

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get"></a>

```csharp
private DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get"></a>

```csharp
private DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a>

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface"></a>

```csharp
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint</a>

---



