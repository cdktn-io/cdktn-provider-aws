# `bedrockagentcoreOnlineEvaluationConfig` Submodule <a name="`bedrockagentcoreOnlineEvaluationConfig` Submodule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreOnlineEvaluationConfig <a name="BedrockagentcoreOnlineEvaluationConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config aws_bedrockagentcore_online_evaluation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig(scope: Construct, id: string, config: BedrockagentcoreOnlineEvaluationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig">BedrockagentcoreOnlineEvaluationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig">BedrockagentcoreOnlineEvaluationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig">putDataSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator">putEvaluator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDataSourceConfig">resetDataSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluator">resetEvaluator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus">resetExecutionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSourceConfig` <a name="putDataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig"></a>

```typescript
public putDataSourceConfig(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putDataSourceConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>[]

---

##### `putEvaluator` <a name="putEvaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator"></a>

```typescript
public putEvaluator(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluator[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putEvaluator.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>[]

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule"></a>

```typescript
public putRule(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentcoreOnlineEvaluationConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

---

##### `resetDataSourceConfig` <a name="resetDataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDataSourceConfig"></a>

```typescript
public resetDataSourceConfig(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEvaluator` <a name="resetEvaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetEvaluator"></a>

```typescript
public resetEvaluator(): void
```

##### `resetExecutionStatus` <a name="resetExecutionStatus" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetExecutionStatus"></a>

```typescript
public resetExecutionStatus(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreOnlineEvaluationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreOnlineEvaluationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreOnlineEvaluationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig">dataSourceConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluator">evaluator</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList">BedrockagentcoreOnlineEvaluationConfigEvaluatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn">onlineEvaluationConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId">onlineEvaluationConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList">BedrockagentcoreOnlineEvaluationConfigRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference">BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput">dataSourceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreateInput">enableOnCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput">evaluationExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorInput">evaluatorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput">executionStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput">onlineEvaluationConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreate">enableOnCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn">evaluationExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus">executionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName">onlineEvaluationConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSourceConfig`<sup>Required</sup> <a name="dataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig"></a>

```typescript
public readonly dataSourceConfig: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList</a>

---

##### `evaluator`<sup>Required</sup> <a name="evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluator"></a>

```typescript
public readonly evaluator: BedrockagentcoreOnlineEvaluationConfigEvaluatorList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList">BedrockagentcoreOnlineEvaluationConfigEvaluatorList</a>

---

##### `onlineEvaluationConfigArn`<sup>Required</sup> <a name="onlineEvaluationConfigArn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn"></a>

```typescript
public readonly onlineEvaluationConfigArn: string;
```

- *Type:* string

---

##### `onlineEvaluationConfigId`<sup>Required</sup> <a name="onlineEvaluationConfigId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId"></a>

```typescript
public readonly onlineEvaluationConfigId: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.outputConfig"></a>

```typescript
public readonly outputConfig: BedrockagentcoreOnlineEvaluationConfigOutputConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.rule"></a>

```typescript
public readonly rule: BedrockagentcoreOnlineEvaluationConfigRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList">BedrockagentcoreOnlineEvaluationConfigRuleList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference">BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference</a>

---

##### `dataSourceConfigInput`<sup>Optional</sup> <a name="dataSourceConfigInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfigInput"></a>

```typescript
public readonly dataSourceConfigInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableOnCreateInput`<sup>Optional</sup> <a name="enableOnCreateInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreateInput"></a>

```typescript
public readonly enableOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `evaluationExecutionRoleArnInput`<sup>Optional</sup> <a name="evaluationExecutionRoleArnInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArnInput"></a>

```typescript
public readonly evaluationExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `evaluatorInput`<sup>Optional</sup> <a name="evaluatorInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluatorInput"></a>

```typescript
public readonly evaluatorInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluator[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>[]

---

##### `executionStatusInput`<sup>Optional</sup> <a name="executionStatusInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatusInput"></a>

```typescript
public readonly executionStatusInput: string;
```

- *Type:* string

---

##### `onlineEvaluationConfigNameInput`<sup>Optional</sup> <a name="onlineEvaluationConfigNameInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigNameInput"></a>

```typescript
public readonly onlineEvaluationConfigNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableOnCreate`<sup>Required</sup> <a name="enableOnCreate" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.enableOnCreate"></a>

```typescript
public readonly enableOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `evaluationExecutionRoleArn`<sup>Required</sup> <a name="evaluationExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn"></a>

```typescript
public readonly evaluationExecutionRoleArn: string;
```

- *Type:* string

---

##### `executionStatus`<sup>Required</sup> <a name="executionStatus" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.executionStatus"></a>

```typescript
public readonly executionStatus: string;
```

- *Type:* string

---

##### `onlineEvaluationConfigName`<sup>Required</sup> <a name="onlineEvaluationConfigName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName"></a>

```typescript
public readonly onlineEvaluationConfigName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreOnlineEvaluationConfigConfig <a name="BedrockagentcoreOnlineEvaluationConfigConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.enableOnCreate">enableOnCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn">evaluationExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName">onlineEvaluationConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig">dataSourceConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>[]</code> | data_source_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluator">evaluator</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>[]</code> | evaluator block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus">executionStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>[]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enableOnCreate`<sup>Required</sup> <a name="enableOnCreate" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.enableOnCreate"></a>

```typescript
public readonly enableOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#enable_on_create BedrockagentcoreOnlineEvaluationConfig#enable_on_create}.

---

##### `evaluationExecutionRoleArn`<sup>Required</sup> <a name="evaluationExecutionRoleArn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluationExecutionRoleArn"></a>

```typescript
public readonly evaluationExecutionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn BedrockagentcoreOnlineEvaluationConfig#evaluation_execution_role_arn}.

---

##### `onlineEvaluationConfigName`<sup>Required</sup> <a name="onlineEvaluationConfigName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.onlineEvaluationConfigName"></a>

```typescript
public readonly onlineEvaluationConfigName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name BedrockagentcoreOnlineEvaluationConfig#online_evaluation_config_name}.

---

##### `dataSourceConfig`<sup>Optional</sup> <a name="dataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.dataSourceConfig"></a>

```typescript
public readonly dataSourceConfig: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>[]

data_source_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#data_source_config BedrockagentcoreOnlineEvaluationConfig#data_source_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#description BedrockagentcoreOnlineEvaluationConfig#description}.

---

##### `evaluator`<sup>Optional</sup> <a name="evaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.evaluator"></a>

```typescript
public readonly evaluator: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluator[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>[]

evaluator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator BedrockagentcoreOnlineEvaluationConfig#evaluator}

---

##### `executionStatus`<sup>Optional</sup> <a name="executionStatus" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.executionStatus"></a>

```typescript
public readonly executionStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#execution_status BedrockagentcoreOnlineEvaluationConfig#execution_status}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#region BedrockagentcoreOnlineEvaluationConfig#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | BedrockagentcoreOnlineEvaluationConfigRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#rule BedrockagentcoreOnlineEvaluationConfig#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#tags BedrockagentcoreOnlineEvaluationConfig#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreOnlineEvaluationConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#timeouts BedrockagentcoreOnlineEvaluationConfig#timeouts}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfig <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigDataSourceConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>[]</code> | cloudwatch_logs block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>[]

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#cloudwatch_logs BedrockagentcoreOnlineEvaluationConfig#cloudwatch_logs}

---

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames">logGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames">serviceNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}. |

---

##### `logGroupNames`<sup>Required</sup> <a name="logGroupNames" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.logGroupNames"></a>

```typescript
public readonly logGroupNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names BedrockagentcoreOnlineEvaluationConfig#log_group_names}.

---

##### `serviceNames`<sup>Required</sup> <a name="serviceNames" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.property.serviceNames"></a>

```typescript
public readonly serviceNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#service_names BedrockagentcoreOnlineEvaluationConfig#service_names}.

---

### BedrockagentcoreOnlineEvaluationConfigEvaluator <a name="BedrockagentcoreOnlineEvaluationConfigEvaluator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigEvaluator: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.property.evaluatorId">evaluatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}. |

---

##### `evaluatorId`<sup>Required</sup> <a name="evaluatorId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator.property.evaluatorId"></a>

```typescript
public readonly evaluatorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id BedrockagentcoreOnlineEvaluationConfig#evaluator_id}.

---

### BedrockagentcoreOnlineEvaluationConfigOutputConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigOutputConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig = { ... }
```


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig = { ... }
```


### BedrockagentcoreOnlineEvaluationConfigRule <a name="BedrockagentcoreOnlineEvaluationConfigRule" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigRule: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig">samplingConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>[]</code> | sampling_config block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig">sessionConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>[]</code> | session_config block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.filter"></a>

```typescript
public readonly filter: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#filter BedrockagentcoreOnlineEvaluationConfig#filter}

---

##### `samplingConfig`<sup>Optional</sup> <a name="samplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.samplingConfig"></a>

```typescript
public readonly samplingConfig: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>[]

sampling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_config BedrockagentcoreOnlineEvaluationConfig#sampling_config}

---

##### `sessionConfig`<sup>Optional</sup> <a name="sessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule.property.sessionConfig"></a>

```typescript
public readonly sessionConfig: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>[]

session_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#session_config BedrockagentcoreOnlineEvaluationConfig#session_config}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFilter <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigRuleFilter: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.value">value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>[]</code> | value block. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#key BedrockagentcoreOnlineEvaluationConfig#key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#operator BedrockagentcoreOnlineEvaluationConfig#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter.property.value"></a>

```typescript
public readonly value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilterValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>[]

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#value BedrockagentcoreOnlineEvaluationConfig#value}

---

### BedrockagentcoreOnlineEvaluationConfigRuleFilterValue <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigRuleFilterValue: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.doubleValue">doubleValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.stringValue">stringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}. |

---

##### `booleanValue`<sup>Optional</sup> <a name="booleanValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value BedrockagentcoreOnlineEvaluationConfig#boolean_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#double_value BedrockagentcoreOnlineEvaluationConfig#double_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#string_value BedrockagentcoreOnlineEvaluationConfig#string_value}.

---

### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}. |

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage BedrockagentcoreOnlineEvaluationConfig#sampling_percentage}.

---

### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigRuleSessionConfig: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}. |

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.property.sessionTimeoutMinutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes BedrockagentcoreOnlineEvaluationConfig#session_timeout_minutes}.

---

### BedrockagentcoreOnlineEvaluationConfigTimeouts <a name="BedrockagentcoreOnlineEvaluationConfigTimeouts" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

const bedrockagentcoreOnlineEvaluationConfigTimeouts: bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#create BedrockagentcoreOnlineEvaluationConfig#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#delete BedrockagentcoreOnlineEvaluationConfig#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/bedrockagentcore_online_evaluation_config#update BedrockagentcoreOnlineEvaluationConfig#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput">logGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput">serviceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames">logGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames">serviceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNamesInput`<sup>Optional</sup> <a name="logGroupNamesInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNamesInput"></a>

```typescript
public readonly logGroupNamesInput: string[];
```

- *Type:* string[]

---

##### `serviceNamesInput`<sup>Optional</sup> <a name="serviceNamesInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNamesInput"></a>

```typescript
public readonly serviceNamesInput: string[];
```

- *Type:* string[]

---

##### `logGroupNames`<sup>Required</sup> <a name="logGroupNames" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames"></a>

```typescript
public readonly logGroupNames: string[];
```

- *Type:* string[]

---

##### `serviceNames`<sup>Required</sup> <a name="serviceNames" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames"></a>

```typescript
public readonly serviceNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>[]

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsList</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">BedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigDataSourceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigDataSourceConfig">BedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorList <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluator[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorIdInput">evaluatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorId">evaluatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluatorIdInput`<sup>Optional</sup> <a name="evaluatorIdInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorIdInput"></a>

```typescript
public readonly evaluatorIdInput: string;
```

- *Type:* string

---

##### `evaluatorId`<sup>Required</sup> <a name="evaluatorId" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.evaluatorId"></a>

```typescript
public readonly evaluatorId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigEvaluator;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigEvaluator">BedrockagentcoreOnlineEvaluationConfigEvaluator</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigList <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig">cloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchConfig`<sup>Required</sup> <a name="cloudwatchConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig"></a>

```typescript
public readonly cloudwatchConfig: BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList">BedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcoreOnlineEvaluationConfigOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigOutputConfig">BedrockagentcoreOnlineEvaluationConfigOutputConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterList <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue"></a>

```typescript
public putValue(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilterValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.putValue.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>[]

---

##### `resetValue` <a name="resetValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList">BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.value"></a>

```typescript
public readonly value: BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList">BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList</a>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilterValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilterValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetBooleanValue">resetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBooleanValue` <a name="resetBooleanValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetBooleanValue"></a>

```typescript
public resetBooleanValue(): void
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetDoubleValue"></a>

```typescript
public resetDoubleValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValueInput">booleanValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValue">booleanValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValueInput`<sup>Optional</sup> <a name="booleanValueInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValueInput"></a>

```typescript
public readonly booleanValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValueInput"></a>

```typescript
public readonly doubleValueInput: number;
```

- *Type:* number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilterValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterValue">BedrockagentcoreOnlineEvaluationConfigRuleFilterValue</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleList <a name="BedrockagentcoreOnlineEvaluationConfigRuleList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigRuleOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig">putSamplingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig">putSessionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSamplingConfig">resetSamplingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig">resetSessionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>[]

---

##### `putSamplingConfig` <a name="putSamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig"></a>

```typescript
public putSamplingConfig(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSamplingConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>[]

---

##### `putSessionConfig` <a name="putSessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig"></a>

```typescript
public putSessionConfig(value: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.putSessionConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetSamplingConfig` <a name="resetSamplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSamplingConfig"></a>

```typescript
public resetSamplingConfig(): void
```

##### `resetSessionConfig` <a name="resetSessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resetSessionConfig"></a>

```typescript
public resetSessionConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList">BedrockagentcoreOnlineEvaluationConfigRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig">samplingConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig">sessionConfig</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput">samplingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput">sessionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filter"></a>

```typescript
public readonly filter: BedrockagentcoreOnlineEvaluationConfigRuleFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilterList">BedrockagentcoreOnlineEvaluationConfigRuleFilterList</a>

---

##### `samplingConfig`<sup>Required</sup> <a name="samplingConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig"></a>

```typescript
public readonly samplingConfig: BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList</a>

---

##### `sessionConfig`<sup>Required</sup> <a name="sessionConfig" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig"></a>

```typescript
public readonly sessionConfig: BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleFilter">BedrockagentcoreOnlineEvaluationConfigRuleFilter</a>[]

---

##### `samplingConfigInput`<sup>Optional</sup> <a name="samplingConfigInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfigInput"></a>

```typescript
public readonly samplingConfigInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>[]

---

##### `sessionConfigInput`<sup>Optional</sup> <a name="sessionConfigInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfigInput"></a>

```typescript
public readonly sessionConfigInput: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRule">BedrockagentcoreOnlineEvaluationConfigRule</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentageInput"></a>

```typescript
public readonly samplingPercentageInput: number;
```

- *Type:* number

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">BedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get"></a>

```typescript
public get(index: number): BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>[]

---


### BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput">sessionTimeoutMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionTimeoutMinutesInput`<sup>Optional</sup> <a name="sessionTimeoutMinutesInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutesInput"></a>

```typescript
public readonly sessionTimeoutMinutesInput: number;
```

- *Type:* number

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">BedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---


### BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference <a name="BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-aws'

new bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreOnlineEvaluationConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreOnlineEvaluationConfig.BedrockagentcoreOnlineEvaluationConfigTimeouts">BedrockagentcoreOnlineEvaluationConfigTimeouts</a>

---



