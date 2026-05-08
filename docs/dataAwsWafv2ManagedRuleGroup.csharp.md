# `dataAwsWafv2ManagedRuleGroup` Submodule <a name="`dataAwsWafv2ManagedRuleGroup` Submodule" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWafv2ManagedRuleGroup <a name="DataAwsWafv2ManagedRuleGroup" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group aws_wafv2_managed_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroup(Construct Scope, string Id, DataAwsWafv2ManagedRuleGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig">DataAwsWafv2ManagedRuleGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig">DataAwsWafv2ManagedRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetVersionName">ResetVersionName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVersionName` <a name="ResetVersionName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetVersionName"></a>

```csharp
private void ResetVersionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsWafv2ManagedRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsWafv2ManagedRuleGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsWafv2ManagedRuleGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsWafv2ManagedRuleGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsWafv2ManagedRuleGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsWafv2ManagedRuleGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsWafv2ManagedRuleGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsWafv2ManagedRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsWafv2ManagedRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.availableLabels">AvailableLabels</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList">DataAwsWafv2ManagedRuleGroupAvailableLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.consumedLabels">ConsumedLabels</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList">DataAwsWafv2ManagedRuleGroupConsumedLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.labelNamespace">LabelNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList">DataAwsWafv2ManagedRuleGroupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.snsTopicArn">SnsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.vendorNameInput">VendorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.versionNameInput">VersionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.versionName">VersionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AvailableLabels`<sup>Required</sup> <a name="AvailableLabels" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.availableLabels"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupAvailableLabelsList AvailableLabels { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList">DataAwsWafv2ManagedRuleGroupAvailableLabelsList</a>

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `ConsumedLabels`<sup>Required</sup> <a name="ConsumedLabels" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.consumedLabels"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupConsumedLabelsList ConsumedLabels { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList">DataAwsWafv2ManagedRuleGroupConsumedLabelsList</a>

---

##### `LabelNamespace`<sup>Required</sup> <a name="LabelNamespace" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.labelNamespace"></a>

```csharp
public string LabelNamespace { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.rules"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList">DataAwsWafv2ManagedRuleGroupRulesList</a>

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.snsTopicArn"></a>

```csharp
public string SnsTopicArn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `VendorNameInput`<sup>Optional</sup> <a name="VendorNameInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.vendorNameInput"></a>

```csharp
public string VendorNameInput { get; }
```

- *Type:* string

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.versionNameInput"></a>

```csharp
public string VersionNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.versionName"></a>

```csharp
public string VersionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWafv2ManagedRuleGroupAvailableLabels <a name="DataAwsWafv2ManagedRuleGroupAvailableLabels" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupAvailableLabels {

};
```


### DataAwsWafv2ManagedRuleGroupConfig <a name="DataAwsWafv2ManagedRuleGroupConfig" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Scope,
    string VendorName,
    string Region = null,
    string VersionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#name DataAwsWafv2ManagedRuleGroup#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#scope DataAwsWafv2ManagedRuleGroup#scope}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.vendorName">VendorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#vendor_name DataAwsWafv2ManagedRuleGroup#vendor_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.versionName">VersionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#version_name DataAwsWafv2ManagedRuleGroup#version_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#name DataAwsWafv2ManagedRuleGroup#name}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#scope DataAwsWafv2ManagedRuleGroup#scope}.

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.vendorName"></a>

```csharp
public string VendorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#vendor_name DataAwsWafv2ManagedRuleGroup#vendor_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#region DataAwsWafv2ManagedRuleGroup#region}

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.versionName"></a>

```csharp
public string VersionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group#version_name DataAwsWafv2ManagedRuleGroup#version_name}.

---

### DataAwsWafv2ManagedRuleGroupConsumedLabels <a name="DataAwsWafv2ManagedRuleGroupConsumedLabels" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupConsumedLabels {

};
```


### DataAwsWafv2ManagedRuleGroupRules <a name="DataAwsWafv2ManagedRuleGroupRules" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRules {

};
```


### DataAwsWafv2ManagedRuleGroupRulesAction <a name="DataAwsWafv2ManagedRuleGroupRulesAction" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesAction {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionAllow <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllow" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllow {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionBlock <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlock" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlock {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionCaptcha <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptcha" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptcha {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionChallenge <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallenge" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallenge.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallenge {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionCount <a name="DataAwsWafv2ManagedRuleGroupRulesActionCount" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCount {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling {

};
```


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsWafv2ManagedRuleGroupAvailableLabelsList <a name="DataAwsWafv2ManagedRuleGroupAvailableLabelsList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupAvailableLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference <a name="DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabels">DataAwsWafv2ManagedRuleGroupAvailableLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupAvailableLabels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabels">DataAwsWafv2ManagedRuleGroupAvailableLabels</a>

---


### DataAwsWafv2ManagedRuleGroupConsumedLabelsList <a name="DataAwsWafv2ManagedRuleGroupConsumedLabelsList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupConsumedLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference <a name="DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabels">DataAwsWafv2ManagedRuleGroupConsumedLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupConsumedLabels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabels">DataAwsWafv2ManagedRuleGroupConsumedLabels</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowList <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllow">DataAwsWafv2ManagedRuleGroupRulesActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.customRequestHandling"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllow">DataAwsWafv2ManagedRuleGroupRulesActionAllow</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.customResponseBodyKey">CustomResponseBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.responseHeader">ResponseHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomResponseBodyKey`<sup>Required</sup> <a name="CustomResponseBodyKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```csharp
public string CustomResponseBodyKey { get; }
```

- *Type:* string

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `ResponseHeader`<sup>Required</sup> <a name="ResponseHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList ResponseHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockList <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.customResponse">CustomResponse</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlock">DataAwsWafv2ManagedRuleGroupRulesActionBlock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomResponse`<sup>Required</sup> <a name="CustomResponse" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.customResponse"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList CustomResponse { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionBlock InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlock">DataAwsWafv2ManagedRuleGroupRulesActionBlock</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha">DataAwsWafv2ManagedRuleGroupRulesActionCaptcha</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.customRequestHandling"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCaptcha InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha">DataAwsWafv2ManagedRuleGroupRulesActionCaptcha</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeList <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallenge">DataAwsWafv2ManagedRuleGroupRulesActionChallenge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.customRequestHandling"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionChallenge InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallenge">DataAwsWafv2ManagedRuleGroupRulesActionChallenge</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.insertHeader">InsertHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InsertHeader`<sup>Required</sup> <a name="InsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList InsertHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.customRequestHandling">CustomRequestHandling</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCount">DataAwsWafv2ManagedRuleGroupRulesActionCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomRequestHandling`<sup>Required</sup> <a name="CustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.customRequestHandling"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList CustomRequestHandling { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCount InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCount">DataAwsWafv2ManagedRuleGroupRulesActionCount</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionList <a name="DataAwsWafv2ManagedRuleGroupRulesActionList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesActionOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList">DataAwsWafv2ManagedRuleGroupRulesActionAllowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.block">Block</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList">DataAwsWafv2ManagedRuleGroupRulesActionBlockList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.captcha">Captcha</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.challenge">Challenge</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.count">Count</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList">DataAwsWafv2ManagedRuleGroupRulesActionCountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesAction">DataAwsWafv2ManagedRuleGroupRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.allow"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionAllowList Allow { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList">DataAwsWafv2ManagedRuleGroupRulesActionAllowList</a>

---

##### `Block`<sup>Required</sup> <a name="Block" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.block"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionBlockList Block { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList">DataAwsWafv2ManagedRuleGroupRulesActionBlockList</a>

---

##### `Captcha`<sup>Required</sup> <a name="Captcha" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.captcha"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList Captcha { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList</a>

---

##### `Challenge`<sup>Required</sup> <a name="Challenge" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.challenge"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeList Challenge { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeList</a>

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.count"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionCountList Count { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList">DataAwsWafv2ManagedRuleGroupRulesActionCountList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesAction">DataAwsWafv2ManagedRuleGroupRulesAction</a>

---


### DataAwsWafv2ManagedRuleGroupRulesList <a name="DataAwsWafv2ManagedRuleGroupRulesList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.get"></a>

```csharp
private DataAwsWafv2ManagedRuleGroupRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsWafv2ManagedRuleGroupRulesOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsWafv2ManagedRuleGroupRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList">DataAwsWafv2ManagedRuleGroupRulesActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRules">DataAwsWafv2ManagedRuleGroupRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.action"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRulesActionList Action { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList">DataAwsWafv2ManagedRuleGroupRulesActionList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsWafv2ManagedRuleGroupRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRules">DataAwsWafv2ManagedRuleGroupRules</a>

---



