# `dataAwsCloudfrontRealtimeLogConfig` Submodule <a name="`dataAwsCloudfrontRealtimeLogConfig` Submodule" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontRealtimeLogConfig <a name="DataAwsCloudfrontRealtimeLogConfig" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontRealtimeLogConfig(Construct Scope, string Id, DataAwsCloudfrontRealtimeLogConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig">DataAwsCloudfrontRealtimeLogConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig">DataAwsCloudfrontRealtimeLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsCloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCloudfrontRealtimeLogConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCloudfrontRealtimeLogConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCloudfrontRealtimeLogConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCloudfrontRealtimeLogConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsCloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCloudfrontRealtimeLogConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCloudfrontRealtimeLogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsCloudfrontRealtimeLogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList">DataAwsCloudfrontRealtimeLogConfigEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fields">Fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.samplingRate">SamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.endpoint"></a>

```csharp
public DataAwsCloudfrontRealtimeLogConfigEndpointList Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList">DataAwsCloudfrontRealtimeLogConfigEndpointList</a>

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fields"></a>

```csharp
public string[] Fields { get; }
```

- *Type:* string[]

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.samplingRate"></a>

```csharp
public double SamplingRate { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontRealtimeLogConfigConfig <a name="DataAwsCloudfrontRealtimeLogConfigConfig" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontRealtimeLogConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsCloudfrontRealtimeLogConfigEndpoint <a name="DataAwsCloudfrontRealtimeLogConfigEndpoint" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontRealtimeLogConfigEndpoint {

};
```


### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get"></a>

```csharp
private DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


### DataAwsCloudfrontRealtimeLogConfigEndpointList <a name="DataAwsCloudfrontRealtimeLogConfigEndpointList" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontRealtimeLogConfigEndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get"></a>

```csharp
private DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference <a name="DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig">KinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType">StreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint">DataAwsCloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KinesisStreamConfig`<sup>Required</sup> <a name="KinesisStreamConfig" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig"></a>

```csharp
public DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList KinesisStreamConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList</a>

---

##### `StreamType`<sup>Required</sup> <a name="StreamType" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType"></a>

```csharp
public string StreamType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsCloudfrontRealtimeLogConfigEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint">DataAwsCloudfrontRealtimeLogConfigEndpoint</a>

---



