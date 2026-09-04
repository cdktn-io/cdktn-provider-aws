# `dataAwsArcregionswitchRoute53HealthChecks` Submodule <a name="`dataAwsArcregionswitchRoute53HealthChecks` Submodule" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsArcregionswitchRoute53HealthChecks <a name="DataAwsArcregionswitchRoute53HealthChecks" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/arcregionswitch_route53_health_checks aws_arcregionswitch_route53_health_checks}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsArcregionswitchRoute53HealthChecks(Construct Scope, string Id, DataAwsArcregionswitchRoute53HealthChecksConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig">DataAwsArcregionswitchRoute53HealthChecksConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig">DataAwsArcregionswitchRoute53HealthChecksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsArcregionswitchRoute53HealthChecks resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsArcregionswitchRoute53HealthChecks.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsArcregionswitchRoute53HealthChecks.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsArcregionswitchRoute53HealthChecks.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsArcregionswitchRoute53HealthChecks.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsArcregionswitchRoute53HealthChecks resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsArcregionswitchRoute53HealthChecks to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsArcregionswitchRoute53HealthChecks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/arcregionswitch_route53_health_checks#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsArcregionswitchRoute53HealthChecks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.healthChecks">HealthChecks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList">DataAwsArcregionswitchRoute53HealthChecksHealthChecksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.planArnInput">PlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.planArn">PlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.healthChecks"></a>

```csharp
public DataAwsArcregionswitchRoute53HealthChecksHealthChecksList HealthChecks { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList">DataAwsArcregionswitchRoute53HealthChecksHealthChecksList</a>

---

##### `PlanArnInput`<sup>Optional</sup> <a name="PlanArnInput" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.planArnInput"></a>

```csharp
public string PlanArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `PlanArn`<sup>Required</sup> <a name="PlanArn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.planArn"></a>

```csharp
public string PlanArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecks.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsArcregionswitchRoute53HealthChecksConfig <a name="DataAwsArcregionswitchRoute53HealthChecksConfig" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsArcregionswitchRoute53HealthChecksConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PlanArn,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.planArn">PlanArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/arcregionswitch_route53_health_checks#plan_arn DataAwsArcregionswitchRoute53HealthChecks#plan_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PlanArn`<sup>Required</sup> <a name="PlanArn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.planArn"></a>

```csharp
public string PlanArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/arcregionswitch_route53_health_checks#plan_arn DataAwsArcregionswitchRoute53HealthChecks#plan_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/arcregionswitch_route53_health_checks#region DataAwsArcregionswitchRoute53HealthChecks#region}

---

### DataAwsArcregionswitchRoute53HealthChecksHealthChecks <a name="DataAwsArcregionswitchRoute53HealthChecksHealthChecks" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsArcregionswitchRoute53HealthChecksHealthChecks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsArcregionswitchRoute53HealthChecksHealthChecksList <a name="DataAwsArcregionswitchRoute53HealthChecksHealthChecksList" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsArcregionswitchRoute53HealthChecksHealthChecksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.get"></a>

```csharp
private DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference <a name="DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.healthCheckId">HealthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.recordName">RecordName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks">DataAwsArcregionswitchRoute53HealthChecksHealthChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.healthCheckId"></a>

```csharp
public string HealthCheckId { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `RecordName`<sup>Required</sup> <a name="RecordName" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.recordName"></a>

```csharp
public string RecordName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecksOutputReference.property.internalValue"></a>

```csharp
public DataAwsArcregionswitchRoute53HealthChecksHealthChecks InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsArcregionswitchRoute53HealthChecks.DataAwsArcregionswitchRoute53HealthChecksHealthChecks">DataAwsArcregionswitchRoute53HealthChecksHealthChecks</a>

---



