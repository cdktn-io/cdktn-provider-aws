# `dataAwsRdsEvents` Submodule <a name="`dataAwsRdsEvents` Submodule" id="@cdktn/provider-aws.dataAwsRdsEvents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsEvents <a name="DataAwsRdsEvents" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events aws_rds_events}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

new dataAwsRdsEvents.DataAwsRdsEvents(scope: Construct, id: string, config?: DataAwsRdsEventsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig">DataAwsRdsEventsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig">DataAwsRdsEventsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetEventCategories">resetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetSourceIdentifier">resetSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetDuration"></a>

```typescript
public resetDuration(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetEventCategories` <a name="resetEventCategories" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetEventCategories"></a>

```typescript
public resetEventCategories(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSourceIdentifier` <a name="resetSourceIdentifier" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetSourceIdentifier"></a>

```typescript
public resetSourceIdentifier(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRdsEvents resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isConstruct"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

dataAwsRdsEvents.DataAwsRdsEvents.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformElement"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

dataAwsRdsEvents.DataAwsRdsEvents.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformDataSource"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

dataAwsRdsEvents.DataAwsRdsEvents.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsRdsEvents resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRdsEvents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRdsEvents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRdsEvents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.events">events</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList">DataAwsRdsEventsEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.eventCategoriesInput">eventCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceIdentifierInput">sourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceIdentifier">sourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.events"></a>

```typescript
public readonly events: DataAwsRdsEventsEventsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList">DataAwsRdsEventsEventsList</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `eventCategoriesInput`<sup>Optional</sup> <a name="eventCategoriesInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.eventCategoriesInput"></a>

```typescript
public readonly eventCategoriesInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sourceIdentifierInput`<sup>Optional</sup> <a name="sourceIdentifierInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceIdentifierInput"></a>

```typescript
public readonly sourceIdentifierInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceIdentifier`<sup>Required</sup> <a name="sourceIdentifier" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceIdentifier"></a>

```typescript
public readonly sourceIdentifier: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsEventsConfig <a name="DataAwsRdsEventsConfig" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.Initializer"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

const dataAwsRdsEventsConfig: dataAwsRdsEvents.DataAwsRdsEventsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.duration">duration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#duration DataAwsRdsEvents#duration}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#end_time DataAwsRdsEvents#end_time}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#event_categories DataAwsRdsEvents#event_categories}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.sourceIdentifier">sourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#source_identifier DataAwsRdsEvents#source_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#source_type DataAwsRdsEvents#source_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#start_time DataAwsRdsEvents#start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#duration DataAwsRdsEvents#duration}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#end_time DataAwsRdsEvents#end_time}.

---

##### `eventCategories`<sup>Optional</sup> <a name="eventCategories" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#event_categories DataAwsRdsEvents#event_categories}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#region DataAwsRdsEvents#region}

---

##### `sourceIdentifier`<sup>Optional</sup> <a name="sourceIdentifier" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.sourceIdentifier"></a>

```typescript
public readonly sourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#source_identifier DataAwsRdsEvents#source_identifier}.

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#source_type DataAwsRdsEvents#source_type}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/rds_events#start_time DataAwsRdsEvents#start_time}.

---

### DataAwsRdsEventsEvents <a name="DataAwsRdsEventsEvents" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEvents.Initializer"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

const dataAwsRdsEventsEvents: dataAwsRdsEvents.DataAwsRdsEventsEvents = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsEventsEventsList <a name="DataAwsRdsEventsEventsList" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

new dataAwsRdsEvents.DataAwsRdsEventsEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.get"></a>

```typescript
public get(index: number): DataAwsRdsEventsEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRdsEventsEventsOutputReference <a name="DataAwsRdsEventsEventsOutputReference" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer"></a>

```typescript
import { dataAwsRdsEvents } from '@cdktn/provider-aws'

new dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.eventCategories">eventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceIdentifier">sourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEvents">DataAwsRdsEventsEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `eventCategories`<sup>Required</sup> <a name="eventCategories" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.eventCategories"></a>

```typescript
public readonly eventCategories: string[];
```

- *Type:* string[]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceIdentifier`<sup>Required</sup> <a name="sourceIdentifier" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceIdentifier"></a>

```typescript
public readonly sourceIdentifier: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRdsEventsEvents;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEvents">DataAwsRdsEventsEvents</a>

---



